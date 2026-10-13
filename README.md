# Arial Immigration

Arial Immigration is a Next.js site for a local Canadian immigration consultancy. The practice is led by Yashpal Jand, a Regulated Canadian Immigration Consultant (RCIC) licensed by the College of Immigration and Citizenship Consultants (CICC).

We help clients with study visas, visitor visas, work visas, LMIA, citizenship, Express Entry, and family sponsorship.

## Local development

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` plus the EmailJS keys. If you have the CICC College ID, set `NEXT_PUBLIC_RCIC_LICENCE` so it appears in the header and footer.

```bash
npm install
npm run dev
```

The app runs at http://localhost:8080.
