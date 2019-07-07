# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/matchane//compare/0.0.1..HEAD
