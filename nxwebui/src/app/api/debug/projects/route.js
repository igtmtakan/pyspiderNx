import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import axios from 'axios';

// GET /api/debug/projects
export async function GET() {
  try {
    console.log('Fetching debug projects...');

    // Check if the table exists by trying to count records
    let projects = [];
    try {
      projects = await prisma.debugProject.findMany({
        orderBy: {
          updatedAt: 'desc',
        },
      });
      console.log(`Found ${projects.length} debug projects`);
    } catch (e) {
      console.error('Error querying debugProject table:', e);
      // Return empty array if table doesn't exist yet
      return NextResponse.json([]);
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching debug projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch debug projects' },
      { status: 500 }
    );
  }
}

// POST /api/debug/projects
export async function POST(request) {
  try {
    console.log('Creating new debug project...');
    const data = await request.json();
    const { name, startUrl } = data;

    console.log(`Project name: ${name}, Start URL: ${startUrl || 'not provided'}`);

    // Validate project name
    if (!name || !name.trim()) {
      console.log('Project name is required');
      return NextResponse.json(
        { error: 'Project name is required' },
        { status: 400 }
      );
    }

    // Check if project name already exists
    try {
      const existingProject = await prisma.debugProject.findUnique({
        where: { name },
      });

      if (existingProject) {
        console.log(`Project name '${name}' already exists`);
        return NextResponse.json(
          { error: 'Project name already exists' },
          { status: 400 }
        );
      }
    } catch (e) {
      console.error('Error checking for existing project:', e);
      // Continue if the table doesn't exist yet
    }

    // Generate default script
    let defaultScript = '';
    try {
      // Try to get default script from PySpider
      console.log('Fetching default script from PySpider...');
      const response = await axios.get(`${process.env.PYSPIDER_API_URL || 'http://localhost:5000'}/api/debug/default_script`, {
        params: {
          project: name,
          'start-url': startUrl || '',
        },
      });
      defaultScript = response.data.script;
      console.log('Successfully fetched default script from PySpider');
    } catch (error) {
      console.error('Error fetching default script from PySpider:', error);
      // Fallback to a basic default script
      console.log('Using fallback default script');
      const date = new Date().toISOString().split('T')[0];
      defaultScript = `#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on ${date}
# Project: ${name}

from pyspider.libs.base_handler import *


class Handler(BaseHandler):
    crawl_config = {
    }

    @every(minutes=24 * 60)
    def on_start(self):
        self.crawl('${startUrl || 'http://example.com/'}', callback=self.index_page)

    @config(age=10 * 24 * 60 * 60)
    def index_page(self, response):
        for each in response.doc('a[href^="http"]').items():
            self.crawl(each.attr.href, callback=self.detail_page)

    @config(priority=2)
    def detail_page(self, response):
        return {
            "url": response.url,
            "title": response.doc('title').text(),
        }
`;
    }

    // Create new project
    console.log('Creating project in database...');
    let project;
    try {
      project = await prisma.debugProject.create({
        data: {
          name,
          script: defaultScript,
        },
      });
      console.log('Project created successfully in database');
    } catch (error) {
      console.error('Error creating project in database:', error);
      return NextResponse.json(
        { error: 'Failed to create project in database' },
        { status: 500 }
      );
    }

    // Try to create project in PySpider
    try {
      console.log('Creating project in PySpider...');
      await axios.post(`${process.env.PYSPIDER_API_URL || 'http://localhost:5000'}/api/projects/${name}`, {
        script: defaultScript,
      });
      console.log('Project created successfully in PySpider');
    } catch (error) {
      console.error('Error creating project in PySpider:', error);
      // Continue anyway, as we'll create it when needed
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error creating debug project:', error);
    return NextResponse.json(
      { error: 'Failed to create debug project' },
      { status: 500 }
    );
  }
}
