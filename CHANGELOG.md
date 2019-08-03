# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.4] 03-08-2019
- Fixing UI issues on small screens.

## [0.0.3] 31-07-2019
- Adding mocked tests for the HnApi service.
- Adding the app logo to the Readme.

## [0.0.3] 31-07-2019
- Adding mocked tests for the HnApi service.
- Adding the app logo to the Readme.

## [0.0.2] 31-07-2019
- Using the HN api id instead of a generated one for ES item indexing.
- Adding an option for advanced search (using ES Query string query).
- Adding a gitattributes file to correct github heuristics.
- Adding a tip dialog.
- Bug fixes.

## [0.0.1] 18-07-2019
- Periodic filtered indexing for HN posts.
- Sanitized basic search (see HnItemController).
- Basic unit test for the sanitizer.
- Basic web client, tested with server APIs.
- Adding search highlight for the items text field (full text on hover).
- Adding search on Enter.
- Adding main page link on the header brand
- Adding a placeholder for undefined post titles".
- Continue indexing instead of starting over if overwriting is disabled (es.hn-items.index.overwrite=false).
- Adding an info bar on the web client header (for announcements and such).
- Adding paginated search
- Disabling multi-field search (needs bigger hosts and better es query handling)

[Unreleased]: https://github.com/matchane/elastic-hn-search/compare/dev..HEAD

[0.0.4]: https://github.com/matchane/elastic-hn-search/releases/tag/v0.0.4
[0.0.3]: https://github.com/matchane/elastic-hn-search/releases/tag/v0.0.3
[0.0.2]: https://github.com/matchane/elastic-hn-search/releases/tag/v0.0.2
[0.0.1]: https://github.com/matchane/elastic-hn-search/releases/tag/v0.0.1
