<script context="module">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { fade } from 'svelte/transition';

  const accItemClass = 'shadow hover:shadow-xl mb-5 rounded-md';
</script>

<div
  class="bg-white/[0.96] card container mx-auto mt-16 p-8 rounded-md space-y-8 shadow-xl"
>
	<div class="card-header">
      <span class="surfer-font text-4xl">giovani barrios-arciga</span>
      <p class="text-xl text-gray-400">software engineer</p>
  </div>
  <div class="card-body">
    <p class="pl-4 pb-5">
      [WIP] three years of professional coding experience and counting++
    </p>

    <Accordion class='pl-3'>
      <AccordionItem class={accItemClass}>
        <svelte:fragment slot="lead">
          July 2023 - Oct 2023 (Osmind)
        </svelte:fragment>
        <svelte:fragment slot="summary">
          QA Automation Engineer
        </svelte:fragment>
        <svelte:fragment slot="content">
          <ul class="list">
            <li>
            · Increased automation test coverage on UI and API features on third party integrations and submission of insurance claims with tests written in Typescript and Playwright
            </li>
            <li>
            · Identified vulnerabilities in pre-production code
            </li>
            <li>
            · Improved reliability of existing UI automation tests by providing feedback to developers on pull requests and Slack communications on how to write test-friendly code
            </li>
          </ul>
        </svelte:fragment>
      </AccordionItem>
      <AccordionItem class={accItemClass}>
        <svelte:fragment slot="lead">
          Sept 2020 - July 2023 (Osmind)
        </svelte:fragment>
        <svelte:fragment slot="summary">
          Software Engineer
        </svelte:fragment>
        <svelte:fragment slot="content">
          <ul class='list'>
            <li>
            · Implemented frontend features based on Figma designs for web and mobile applications, including components for navigation, intake forms, and surveys using React, Typescript, with Ant Design as the design library
            </li>
            <li>
            · Maintained and increased front-end productivity during company growth from &#60;5 employees to 65+
              </li>
            <li>
            · Created backend functions using a Serverless Framework with AWS for various use cases such as collecting patient information and storing and retrieving insurance documents in S3
            </li>
            <li>
            · Spearheaded effort to rebuild hundreds of static assets across all digital media and communications (provider-facing application, email, mobile app, generated PDFs)
            </li>
            <li>
            · Addressed technical debt through the consolidation of redundant fields within database using SQL migrations
            </li>
          </ul>
        </svelte:fragment>
      </AccordionItem>
      <AccordionItem class={accItemClass}>
        <svelte:fragment slot="lead">
          May 2020 - Aug 2020 (Osmind)
        </svelte:fragment>
        <svelte:fragment slot="summary">
          Software Engineer Intern
        </svelte:fragment>
        <svelte:fragment slot="content">
          <ul class='list'>
            <li>
            · Came on as employee #2 in the early development of Osmind, an EHR platform for treatment-resistant mental health conditions that fosters optimal care delivery for providers
            </li>
            <li>
            · Applied existing skills in Javascript, HTML, and CSS, as well as quickly came to speed in React, in order to create consistency and visual appeal across company’s provider-facing website
            </li>
            <li>
            · Developed visualizations of patient’s progress and treatment on the platform using Chart.js
            </li>
          </ul>
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </div>
</div>

<style>
  .surfer-font {
    font-family: "Sen", sans-serif;
    color: teal;
    font-weight: 600;
    font-style: normal;
  }
</style>