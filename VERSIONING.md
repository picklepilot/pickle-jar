# Versioning Strategy for Pickle Jar Monorepo

## Overview

This document outlines the versioning strategy for the Pickle Jar Vue.js monorepo, which contains UI components, design system packages, and web applications.

## Versioning Approach

### Independent Versioning with Semantic Versioning (SemVer)

We use **independent versioning** where each package maintains its own version number, following **Semantic Versioning (SemVer)** principles: `MAJOR.MINOR.PATCH`.

## Package Versioning Guidelines

### Core Packages

#### `@pickle-jar/core` (Foundation Package)

- **Current Version**: `0.1.0`
- **Purpose**: Core utilities, types, and foundational styles
- **Versioning**: Most stable, changes infrequently
- **Breaking Changes**: Rare, require careful consideration

#### `@pickle-jar/ui` (Vue Components)

- **Current Version**: `0.1.0`
- **Purpose**: Vue 3 UI components and modules
- **Versioning**: Active development, frequent updates
- **Breaking Changes**: More common during early development

#### `@pickle-jar/ui-lit` (Web Components)

- **Current Version**: `0.1.0`
- **Purpose**: Lit-based web components
- **Versioning**: Parallel to Vue components
- **Breaking Changes**: Should align with Vue components when possible

### Applications

#### `web` (Documentation Site)

- **Current Version**: `0.0.17`
- **Purpose**: Component documentation and showcase
- **Versioning**: Can be more frequent, less critical for consumers
- **Breaking Changes**: Internal only

## Version Increment Rules

### MAJOR Version (X.0.0)

- Breaking changes to public APIs
- Removal of deprecated features
- Major architectural changes
- Incompatible dependency updates

### MINOR Version (0.X.0)

- New features (backward compatible)
- New components added
- New utility functions
- Performance improvements

### PATCH Version (0.0.X)

- Bug fixes
- Documentation updates
- Minor styling adjustments
- Dependency updates (non-breaking)

## Release Process

### 1. Pre-release Checklist

- [ ] All tests passing
- [ ] Storybook builds successfully
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] Breaking changes documented

### 2. Version Bumping

```bash
# For a new feature (minor version)
pnpm version minor --filter @pickle-jar/ui

# For a bug fix (patch version)
pnpm version patch --filter @pickle-jar/core

# For a breaking change (major version)
pnpm version major --filter @pickle-jar/ui
```

### 3. Publishing

```bash
# Publish specific package
pnpm publish --filter @pickle-jar/ui

# Publish all packages (if needed)
pnpm publish --recursive
```

## Dependency Management

### Internal Dependencies

- Use `workspace:*` for internal package dependencies
- Ensures latest workspace versions are used during development
- Lock to specific versions before publishing

### External Dependencies

- Keep external dependencies up to date
- Use caret ranges (`^`) for minor updates
- Pin major versions when breaking changes are expected

## Version Alignment Strategy

### When to Align Versions

- **Major releases**: Consider aligning all packages for marketing
- **Breaking changes**: Align affected packages
- **New features**: Align packages that work together

### When to Keep Independent

- **Bug fixes**: Only bump affected packages
- **Documentation updates**: Only bump app packages
- **Internal refactoring**: Only bump changed packages

## Tools and Automation

### Recommended Tools

- **Changesets**: For managing versioning and changelogs
- **pnpm version**: For version bumping
- **GitHub Actions**: For automated releases

### Setup Changesets (Recommended)

```bash
pnpm add -D @changesets/cli
pnpm changeset init
```

## Best Practices

### 1. Commit Messages

Use conventional commits:

```
feat(ui): add new Button component
fix(core): resolve type definition issue
BREAKING CHANGE(ui): rename Button variant prop
```

### 2. Changelog Management

- Maintain CHANGELOG.md for each package
- Use automated changelog generation
- Include migration guides for breaking changes

### 3. Testing

- Test packages in isolation
- Test integration between packages
- Use workspace linking for testing

### 4. Documentation

- Document breaking changes clearly
- Provide migration guides
- Update examples and demos

## Migration from Current State

### Immediate Actions

1. Align `@pickle-jar/ui` with `@pickle-jar/core` (both at 0.1.0)
2. Consider bumping `@pickle-jar/ui-lit` to 0.1.0 for consistency
3. Document current state in CHANGELOG files

### Future Planning

1. Set up Changesets for automated versioning
2. Establish release automation
3. Create versioning guidelines for team members

## Troubleshooting

### Common Issues

- **Version conflicts**: Use `pnpm install` to resolve
- **Publishing errors**: Check package.json configuration
- **Dependency issues**: Verify workspace dependencies

### Getting Help

- Check this document first
- Review package.json configurations
- Consult team for complex versioning decisions
