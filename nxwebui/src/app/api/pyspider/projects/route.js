import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const pyspiderUrl = process.env.PYSPIDER_API_URL || 'http://localhost:5000';
    console.log(`Fetching PySpider projects from: ${pyspiderUrl}`);

    // Fetch the PySpider dashboard page
    const response = await axios.get(pyspiderUrl, {
      timeout: 5000
    });

    // Extract projects data from the HTML
    const html = response.data;

    // Try to extract the projects data from the JavaScript variable
    const projectsMatch = html.match(/window\.projects\s*=\s*(\[.*?\]);/s);

    if (projectsMatch && projectsMatch[1]) {
      try {
        // Parse the JSON data
        const projectsData = JSON.parse(projectsMatch[1]);
        console.log(`Found ${projectsData.length} projects in PySpider`);

        return NextResponse.json({
          source: 'pyspider',
          projects: projectsData
        });
      } catch (parseError) {
        console.error('Error parsing PySpider projects data:', parseError);
      }
    }

    // Fallback to HTML parsing if JavaScript variable extraction fails
    const $ = cheerio.load(html);
    const projects = [];

    $('table.projects tbody tr').each((i, element) => {
      const name = $(element).attr('data-name');
      if (name) {
        projects.push({
          name,
          status: $(element).find('.project-status span').text().trim(),
          group: $(element).find('.project-group span').text().trim() || null,
          rate: parseFloat($(element).find('.project-rate span').text().split('/')[0]) || 1,
          burst: parseFloat($(element).find('.project-rate span').text().split('/')[1]) || 3,
          updatetime: Date.now() / 1000
        });
      }
    });

    console.log(`Found ${projects.length} projects in PySpider using HTML parsing`);

    return NextResponse.json({
      source: 'html-parsing',
      projects
    });
  } catch (error) {
    console.error('Error fetching PySpider projects:', error);

    // Return empty projects array on error
    return NextResponse.json({
      source: 'error',
      error: error.message,
      projects: []
    });
  }
}
