# Abhishek Umrawal Academic Website

Personal academic website for Abhishek Umrawal.

The website is maintained directly in HTML. The files in the root `aumrawal/`
directory are the canonical website source. No Quarto build, static-site
generator, or compilation step is required.

## Website Structure

The primary website pages are:

- `index.html` — About / homepage, profile, education, appointments, metrics,
  and recent news
- `research.html` — Research program, current directions, forward agenda,
  and selected work
- `publications.html` — Journal papers, journal manuscripts, conference
  publications, education publications, working papers, and software
- `teaching.html` — Teaching experience, course syllabi, teaching leadership,
  recognition, and mentoring
- `service.html` — Scholarly, professional, university, and outreach service
- `talks.html` — Invited and contributed research talks
- `grants.html` — Grants and educational-innovation funding
- `awards.html` — Awards, honors, media, and research visibility

Shared website files:

- `styles.css` — Shared site styling
- `site.js` — Shared JavaScript behavior
- `photo.jpg` — Homepage profile photograph
- `cv.pdf` or `Abhishek_Umrawal_CV.pdf` — Current CV, depending on the links
  used by the deployed version

Supporting directories:

- `research/` — Research statement and related research materials
- `teaching/` — Teaching statement, student success statement, teaching
  experience, and course syllabi
- `service/` — Service statement

## Canonical Source

The root HTML files are the source of truth.

For example:

- edit `research.html` to update the Research page
- edit `publications.html` to update publications
- edit `teaching.html` to update courses, mentoring, or teaching materials
- edit `service.html` to update professional or university service

Do not treat files in `utils/`, Quarto source files, generated copies, or
archived versions as canonical website content.

If duplicate or experimental copies exist, the root-level production files
take precedence.

## Editing the Website

For routine updates:

1. Open the relevant root-level `.html` file in a text editor.
2. Make the content change.
3. Save the file.
4. Open or refresh `index.html` in a browser.
5. Check the edited page on both desktop and mobile widths.
6. Check both light and dark modes.
7. Verify all modified links before publishing.

There is no render or build command.

## Shared Styling and Behavior

Site-wide visual styling is maintained in:

`styles.css`

Site-wide JavaScript behavior is maintained in:

`site.js`

Use these files when a change should apply consistently across multiple pages.

Examples include:

- navigation
- typography
- colors
- responsive layouts
- dark mode
- buttons
- publication styling
- research cards
- course lists
- service layouts

For page-specific content changes, prefer editing the corresponding HTML file
instead of changing shared CSS or JavaScript.

## Navigation

The primary navigation is:

About | Research | Publications | Teaching | Service | Talks | Grants | Awards

A CV button appears in the navigation.

When adding a new primary page or changing a filename, update the navigation
consistently across all root-level HTML pages.

## Homepage

`index.html` contains the public-facing overview of the academic profile.

The current homepage includes:

- academic title and affiliation
- research identity
- research-area and methods tags
- Google Scholar metrics
- publication and award metrics
- education
- academic appointments
- recent news

The homepage research-program details are intentionally kept on
`research.html` rather than duplicated extensively on the homepage.

### Metrics

When updating metrics, check all locations where the same information may
appear.

Current homepage metrics include:

- citations
- h-index
- journal papers
- journal manuscripts
- conference papers
- awards

Citation metrics should include the Google Scholar attribution and the month
and year of the update.

## Research Page

`research.html` contains the detailed research program.

The research program is organized around four streams:

1. Algorithmic Marketing & Influence in Digital Platforms
2. Online Learning for Targeting & Recommendation
3. Platform Systems, Mechanisms & Open-Source Tools
4. Generative AI Safety, Causality & Strategic Behavior

Each stream may contain:

- motivating question
- research description
- current directions
- forward agenda
- selected-work links

Selected-work buttons should link to the corresponding individual publication
anchors in `publications.html`.

The Research Statement PDF is stored under `research/`.

## Publications Page

`publications.html` is the canonical publication listing for the website.

Major sections include:

- Journal Papers
- Journal Manuscripts
- Conference Proceedings
- Education & Teaching Publications
- Additional Working Papers
- Open-Source Software

Important anchors include:

- `#journal-papers`
- `#journal-manuscripts`
- `#conference-papers`

Individual publication anchors are also used by the Research page.

When updating publications:

1. preserve the J/JR/C/E/W/S numbering scheme
2. preserve existing anchors whenever possible
3. update cross-links from `research.html` if an anchor changes
4. distinguish journal, conference, workshop, preprint, manuscript, and
   software links accurately
5. retain earlier-version information where applicable
6. avoid duplicating conference papers already listed as earlier versions of
   journal papers or journal manuscripts

Publication status on the website should remain consistent with the CV and
research statement.

## Teaching Page

`teaching.html` contains:

- teaching experience
- course descriptions
- syllabus links
- teaching leadership and innovation
- teaching and advising recognition
- student advising and mentorship

Course PDFs are stored under:

`teaching/`

Current supporting documents include:

- Teaching Statement
- Student Success Statement
- Teaching Experience
- individual course syllabi

The teaching introduction is justified on desktop and left-aligned on mobile.

When adding a course, verify that:

1. the institution and role are correct
2. the course title and number are correct
3. the description is concise and accurate
4. the syllabus path exists
5. the link opens the intended PDF

## Service Page

`service.html` contains scholarly, professional, university, and outreach
service.

Major categories include:

- journal reviewing
- conference reviewing
- reviewing recognition
- conference session chairing
- committee service
- program contributions
- outreach and engagement
- institutional reviewing

The Service Statement PDF is stored under:

`service/`

The detailed website service record and the narrative Service Statement serve
different purposes. The website may inventory activities more extensively,
while the statement should present a coherent service philosophy supported by
representative examples.

## Talks, Grants, and Awards

### Talks

`talks.html` contains selected invited and contributed research talks,
including scheduled talks where appropriate.

### Grants

`grants.html` contains selected project funding and educational-innovation
grants, including role, amount, dates, and associated outputs where relevant.

### Awards

`awards.html` contains awards and fellowships as well as selected media and
research visibility.

## PDF Statements and Supporting Materials

Canonical statement titles are:

- Statement of Research
- Statement of Teaching
- Statement of Student Success
- Statement of Service

Website buttons may be contextual to the page, but the underlying statements
should retain these generic canonical titles.

When replacing a PDF:

1. preserve the existing filename whenever possible
2. verify that the corresponding website button still works
3. open the PDF from the website after replacement
4. confirm that the uploaded PDF is the intended current version

## Local Preview

No local server is required for basic inspection.

Open:

`index.html`

directly in a browser and navigate normally.

For changes involving browser security restrictions, JavaScript behavior, or
more extensive testing, a lightweight local HTTP server may be used, but it is
not part of the normal editing workflow.

## Pre-Publication Checklist

Before publishing a new website version:

- [ ] Open every modified page locally
- [ ] Check desktop layout
- [ ] Check mobile layout
- [ ] Check light mode
- [ ] Check dark mode
- [ ] Verify navigation links
- [ ] Verify CV link
- [ ] Verify statement PDF links
- [ ] Verify newly added syllabus links
- [ ] Verify publication links
- [ ] Verify Research-page Selected Work anchors
- [ ] Check publication status against the CV
- [ ] Check research descriptions against the current research statement
- [ ] Check teaching/service content against the current dossier
- [ ] Update homepage metrics if needed
- [ ] Update the Google Scholar metric date if metrics changed
- [ ] Remove accidental temporary or system files from the release package

## Publishing

Upload the root HTML files, shared assets, and supporting directories while
preserving their relative paths.

At minimum, a deployment should retain:

- root `.html` files
- `styles.css`
- `site.js`
- `photo.jpg`
- current CV PDF
- `research/`
- `teaching/`
- `service/`
- any other assets referenced by the HTML

Do not rename deployed files without also updating every relative link that
references them.

## Versioning

For packaged website releases, use sequential version names:

- `aumrawal_v1`
- `aumrawal_v2`
- `aumrawal_v3`
- ...

Increment the version number rather than overwriting or reusing an older
version label.

## Repository Hygiene

The following are not part of the production website and should normally be
excluded from clean release packages:

- `__MACOSX/`
- `.DS_Store`
- `._*` macOS metadata files
- temporary HTML copies
- obsolete generated files
- archived experimental versions
- unused Quarto files

If `utils/` contains historical or experimental copies of pages, do not edit
those copies when making production changes.

## Content Consistency

The website, CV, and application materials should tell the same factual story.

When synchronizing the CV and website:

- retain entries unique to either source
- identify discrepancies rather than silently dropping them
- keep publication status consistent
- keep paper titles and author lists consistent
- keep grants, awards, teaching, and service dates consistent
- keep manuscript target-journal language consistent with the current dossier

The website need not reproduce the CV verbatim. It should present the same
underlying record in a web-friendly and readable form.

## General Maintenance Principle

Prefer small, targeted edits that preserve the existing design and information
architecture.

For content updates:
edit HTML.

For site-wide visual changes:
edit `styles.css`.

For site-wide interaction changes:
edit `site.js`.

Avoid introducing a new site generator or build system unless the website is
intentionally being redesigned around one.

## Syllabus Buttons

All course syllabus buttons on `teaching.html` are controlled by a single
configuration variable near the bottom of the file:

    const SHOW_SYLLABUS_BUTTONS = false;

Set:

- `false` to hide all syllabus buttons
- `true` to display all syllabus buttons

This allows syllabus links to remain in the HTML while the corresponding PDF
collection is being completed.
