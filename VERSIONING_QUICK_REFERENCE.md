# Versioning Quick Reference

## Daily Operations

### Creating a Changeset

```bash
# Interactive mode - select packages and change types
pnpm changeset

# Or use the script
pnpm run changeset
```

### Bumping Versions

```bash
# Apply all pending changesets and bump versions
pnpm version

# Or use the script
pnpm run version
```

### Publishing Packages

```bash
# Publish all packages with pending changesets
pnpm publish

# Or use the script
pnpm run publish
```

### Checking Status

```bash
# Check pending changesets
pnpm run version:check
```

## Manual Version Bumping (if needed)

### Individual Package

```bash
# Minor version bump
pnpm version minor --filter @pickle-jar/ui

# Patch version bump
pnpm version patch --filter @pickle-jar/core

# Major version bump
pnpm version major --filter @pickle-jar/ui
```

### All Packages

```bash
# Bump all packages to same version
pnpm version minor --recursive
```

## Common Scenarios

### New Feature Added

1. `pnpm changeset` - Select affected packages, choose "minor"
2. `pnpm version` - Apply changesets
3. `pnpm publish` - Publish to registry

### Bug Fix

1. `pnpm changeset` - Select affected packages, choose "patch"
2. `pnpm version` - Apply changesets
3. `pnpm publish` - Publish to registry

### Breaking Change

1. `pnpm changeset` - Select affected packages, choose "major"
2. `pnpm version` - Apply changesets
3. `pnpm publish` - Publish to registry

## Package Dependencies

### Internal Dependencies

- Use `workspace:*` in package.json
- Automatically resolves to latest workspace version
- No manual version management needed

### External Dependencies

- Use `^` for minor updates: `"vue": "^3.5.13"`
- Use `~` for patch updates: `"typescript": "~5.6.2"`
- Pin major versions when needed: `"@headlessui/vue": "insiders"`

## Troubleshooting

### Version Conflicts

```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Publishing Issues

```bash
# Check package.json configuration
# Verify npm registry access
# Ensure package is not private
```

### Changeset Issues

```bash
# Reset changesets
rm -rf .changeset
pnpm changeset init
```

## Best Practices

1. **Always use changesets** for version management
2. **Test before publishing** - run `pnpm build` and `pnpm test`
3. **Update documentation** when making changes
4. **Use conventional commits** for better changelog generation
5. **Review changes** before publishing major versions
