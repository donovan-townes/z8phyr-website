# Z8phyR integrations

The current integration work is prepared in this Next.js copy. It has not been pushed to GitHub or deployed to Vercel. Apply/review the changes in the repository actually connected to Vercel before publishing; do not replace an independently updated repository wholesale with this export.

## Connected destinations

| Surface | Destination | Edit |
| --- | --- | --- |
| Newsletter section | Kit form `feedbbfe7a` | `app/integrations.ts`, `app/newsletter-signup.tsx` |
| Work With Me | `/work-with-me` with Tally form `9qe5Y5` | `app/work-with-me/page.tsx`, `app/inquiry-form.tsx` |
| Shop navigation | https://payhip.com/Z8phyRMusic | `app/integrations.ts` |
| Free project | https://payhip.com/b/frUxa | `app/integrations.ts` |
| Free project checkout | https://payhip.com/buy?link=frUxa | `app/integrations.ts` |

No new environment variables, API credentials, DNS records, payment backend, or dependencies are needed. Keep z8phyr.com and www connected to Vercel. Embedding Kit/Tally does not require connecting a custom domain to those services. Sending-domain authentication in Kit is a separate account setup task.

The product uses a neutral title until its exact display name and optional artwork are supplied. The website does not assume a DAW, plugin requirements, compatibility, or licensing terms; Payhip's product page provides the download details. The ZIP remains on Payhip. Merch remains a separate placeholder.

## Kit: confirm these settings in the account

1. Verify that this form is intended for Z8phyR interest within the unified Cool Breeze account. If the same form is used for general label signup, use a dedicated Z8phyR form or an explicit interest choice instead of tagging every label subscriber as a Z8phyR subscriber.
2. Create a `Z8phyR` tag. Under Automate, create a rule or visual automation: subscribes to this form → add that tag. Activate it.
3. Create a Z8phyR segment filtered by that tag for targeted broadcasts.
4. Review the confirmation email, sender/reply-to address, and success message in Kit.
5. On the preview, sign up with an address you control. Complete confirmation if enabled, and check the subscriber's form and tag in Kit.

The form is supplied by Kit's script on each mount. Future form edits can be made in Kit. The direct signup link remains available if JavaScript or the provider is blocked. The code does not manage account-side tags, automations, or deliverability settings. Newsletter editions are not automatically copied into the site's journal.

## Tally: confirm delivery

The Work With Me page keeps the services together and links Start a project to the form. Rates currently say Request a quote. Change those to actual starting prices and currency when ready.

1. Confirm the form is published and the receiving email notifications are enabled for the correct inbox.
2. Check category names match the services and that the reply email field is required.
3. Submit one clearly labeled test yourself. Confirm the response in Tally and notification in your inbox.
4. Check the confirmation screen, desktop/mobile layout, and the direct form fallback link.

The iframe can load without the widget script; Tally's script adds automatic height adjustment. The script is loaded once by Next.js and initializes again when the page is revisited. Inquiry submissions do not automatically subscribe people to the newsletter.

## Payhip: verify the free download

1. Open the featured product page and check its title, contents, requirements, and usage terms.
2. Use the free checkout yourself to verify receipt and ZIP delivery.
3. Future paid products should be configured and delivered through Payhip. Connect supported payment processing there; the artist website needs only public links.

## Review before production

In the live repository, prepare a feature branch (for example, `connect-artist-services`), incorporate these changes, and run `npm run typecheck` and `npm run build`. Push the feature branch for a Vercel preview. Check:

- Homepage → Work With Me → Join the Breeze → Work With Me: the Kit form appears once and Tally still loads/resizes after navigation.
- Direct visits and refreshes to `/work-with-me` work.
- Navigation, service links, and forms fit phone and desktop widths.
- All three services have reachable direct-link fallbacks.
- The signup, inquiry, and free download complete in their provider dashboards after your tests.

Merge through the repository's normal production workflow only after reviewing the preview. Do not re-import the project into Vercel or change domain records for this update.

## Deferred guestbook

No Supabase connection or keys are needed yet. A later step will create a project, a moderated message table, access policies, spam controls, Vercel environment variables, and a backup/export routine. Database credentials should be entered into local/Vercel environment settings, never committed or pasted into chat.

## Provider references

- Kit embeds: https://help.kit.com/en/articles/2502640-the-kit-form-builder
- Kit tagging: https://help.kit.com/en/articles/4306079-how-to-automatically-tag-subscribers
- Tally Next.js: https://developers.tally.so/widgets/examples/nextjs
- Payhip checkout links: https://help.payhip.com/article/126-direct-checkout-link
