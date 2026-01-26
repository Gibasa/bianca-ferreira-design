---
name: performance-audit
description: Analyzes web projects for performance optimization techniques and best practices. Use when auditing websites or checking performance implementation quality.
---

# Performance Audit Skill

When auditing a web project for performance, follow these steps:

## Audit checklist

1. **Core Web Vitals**: Measure key user experience metrics
   - LCP (Largest Contentful Paint): < 2.5s
   - FID/INP (First Input Delay/Interaction to Next Paint): < 200ms/100ms
   - CLS (Cumulative Layout Shift): < 0.1
   - TTFB (Time to First Byte): < 800ms
   - FCP (First Contentful Paint): < 1.8s

2. **Asset Optimization**: Review resource loading and delivery
   - Image optimization (format, compression, sizing)
   - Font loading strategies (font-display, subsetting)
   - CSS and JavaScript minification and bundling
   - Code splitting and lazy loading
   - Tree shaking and dead code elimination
   - Gzip/Brotli compression

3. **Network Performance**: Analyze resource delivery
   - HTTP/2 or HTTP/3 usage
   - CDN implementation
   - Resource hints (preload, prefetch, dns-prefetch, preconnect)
   - Efficient caching strategies (Cache-Control headers)
   - Reduce request waterfall and critical chain depth
   - Third-party script impact

4. **Rendering Performance**: Check browser rendering efficiency
   - Render-blocking resources
   - Critical CSS inlining
   - JavaScript execution time
   - Layout thrashing and forced reflows
   - Paint complexity and layer management
   - Animation performance (CSS vs JS, GPU acceleration)

5. **JavaScript Performance**: Evaluate code execution
   - Bundle size analysis
   - Long tasks (> 50ms blocking time)
   - Event listener efficiency
   - Memory leaks
   - Unnecessary re-renders (React, Vue, etc.)
   - Web Workers for heavy computation

6. **Loading Strategy**: Review resource prioritization
   - Above-the-fold content prioritization
   - Lazy loading for images and components
   - Async/defer script loading
   - Service Worker implementation
   - Progressive Web App features

## How to provide feedback

- **Quantify impact**: Use metrics (KB saved, ms improved, % score increase)
- **Show before/after**: Demonstrate the performance gain
- **Prioritize wins**: Focus on high-impact, low-effort improvements first
- **Provide tools**: Suggest testing tools and monitoring solutions
- **Include code**: Show implementation examples with best practices

## Analysis output format

Organize findings into:

### ✅ Implemented Optimizations
List performance techniques already in place

### ⚠️ Performance Issues
Categorize by impact:
- **Critical**: Major bottlenecks (> 1s impact)
- **High**: Significant opportunities (500ms-1s impact)
- **Medium**: Noticeable improvements (100-500ms impact)
- **Low**: Minor optimizations (< 100ms impact)

### 💡 Optimization Recommendations
Provide actionable steps with:
- What to optimize
- Performance impact (time/size savings)
- Implementation approach (with code examples)
- Complexity/effort level (easy, medium, hard)
- Priority ranking

### 📊 Performance Report Summary
Include:
- **Metrics Overview**: Current Core Web Vitals scores
- **Page Weight Analysis**: Total size breakdown (HTML, CSS, JS, Images, Fonts)
- **Load Time Analysis**: Timeline of key rendering events
- **Quick Wins**: Top 3-5 easiest high-impact optimizations
- **Long-term Goals**: Architectural improvements to consider
- **Monitoring Tools**: Recommended tools for ongoing performance tracking
  - Lighthouse CI
  - WebPageTest
  - Chrome DevTools Performance panel
  - Real User Monitoring (RUM) solutions

### 🎯 Performance Score
- Overall performance grade (A-F or 0-100)
- Comparison to industry benchmarks
- Estimated improvement potential
