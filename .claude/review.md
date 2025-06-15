Conduct a comprehensive code review of this Next.js App Router code. Analyze from the following perspectives and provide specific improvement recommendations:

## 🏗️ App Router Architecture

### Directory Structure & File Organization

- Evaluate app/ directory structure appropriateness
- Check layout.tsx, page.tsx, loading.tsx, error.tsx, not-found.tsx placement
- Assess Route Groups utilization (when applicable)
- Review Parallel Routes and Intercepting Routes implementation

### Server Components vs Client Components

- Verify appropriate 'use client' directive usage
- Analyze Server/Client Components boundary design
- Check for Hydration Mismatch prevention
- Evaluate interactive element placement

## ⚡ Performance Optimization

### Rendering Strategy

- Assess Static Generation, Dynamic Rendering, ISR selection
- Review generateStaticParams() implementation
- Evaluate Dynamic Segments ([id], [...slug]) optimization
- Analyze caching strategy (fetch cache, Router Cache, Full Route Cache)

### Data Fetching

- Review Server Components fetch() usage
- Check data fetching parallelization (Promise.all, etc.)
- Evaluate Suspense boundary placement
- Assess loading.tsx vs Suspense usage

### Optimization Features

- Verify next/image implementation (priority, sizes, alt)
- Check next/font usage
- Review Dynamic Imports (lazy loading)
- Identify bundle analysis targets

## 🔒 Security

### Data Protection

- Verify environment variable management (NEXT*PUBLIC*\* distinction)
- Check Server Actions input validation
- Review XSS prevention (avoid dangerouslySetInnerHTML)
- Audit sensitive information client exposure

### API & Authentication

- Assess Server Actions CSRF protection
- Review authentication state management
- Check role-based access control
- Evaluate session/JWT management

## 📝 Code Quality

### TypeScript Utilization

- Review component Props type definitions
- Check Server Components type safety
- Evaluate searchParams, params type definitions
- Assess custom hooks type definitions

### Next.js-Specific Implementation

- Review Metadata configuration (generateMetadata)
- Check redirect(), notFound() usage
- Evaluate cookies(), headers() utilization
- Assess Server Actions implementation quality

### React Best Practices

- Review component responsibility separation
- Check useEffect, useState appropriate usage
- Evaluate memoization (memo, useMemo, useCallback) application
- Assess Error Boundary implementation

## 🎯 SEO & Accessibility

### SEO Implementation

- Check metadata completeness (title, description, OG tags)
- Review structured data (JSON-LD)
- Assess sitemap generation support
- Evaluate robots.txt considerations

### Accessibility

- Check semantic HTML element usage
- Review ARIA attributes implementation
- Assess keyboard navigation
- Evaluate screen reader support

## 🛠️ Developer Experience

### Error Handling

- Review error.tsx, global-error.tsx implementation
- Check try-catch block placement
- Assess user-friendly error display
- Evaluate development environment error information

### Testability

- Assess component test feasibility
- Review Server Components testing strategy
- Consider mocking approaches
- Evaluate E2E testing support

## 🔧 Specific Improvement Recommendations

For each item, provide:

1. **Current Implementation Assessment**
2. **Issue Identification**
3. **Concrete Improvement Code Examples**
4. **Expected Benefits**
5. **Implementation Priority** (High/Medium/Low)

## 📊 Overall Evaluation

Provide comprehensive assessment covering:

- **Code Quality Score** (1-10)
- **Performance Evaluation**
- **Security Level**
- **Maintainability & Extensibility**
- **Next.js App Router Utilization**

---

**Code to Review:**
$ARGUMENTS
