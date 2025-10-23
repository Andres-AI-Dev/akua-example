# Deployment Checklist

## Pre-Deployment

- [x] All tests pass (`npm run test`)
- [x] TypeScript compiles without errors (`tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [x] Production build succeeds (`npm run build`)
- [ ] Preview build locally (`npm run preview`)
- [ ] Lighthouse audit scores > 90 (Performance, Accessibility, Best Practices)

## Vercel Deployment

- [ ] Create Vercel account (if not already done)
- [ ] Connect GitHub repository to Vercel
- [ ] Verify build settings in Vercel dashboard
- [ ] Configure custom domain (optional)
- [ ] Set up environment variables (if needed)
- [ ] Enable Vercel Analytics (optional)

## Post-Deployment

- [ ] Verify deployment is live and accessible
- [ ] Test all sections on production URL
- [ ] Check responsive design on real devices
- [ ] Verify all links work
- [ ] Check browser console for errors
- [ ] Run Lighthouse audit on production URL
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

## Rollback Plan

If issues are found after deployment:
1. In Vercel dashboard, go to Deployments
2. Find the previous working deployment
3. Click "Promote to Production"
