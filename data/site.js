// All ProGrade copy and business data in one place.
//
// Source: "Prograde_Roof_Coating_Website_Plan.docx" (Marc, Oct 2026) and
// William Gorman's Facebook page (photos + reels used with his permission).
//
// The plan marks unknown facts in [square brackets] and says nothing in
// brackets may go live. Those facts are NOT on the site. Where a sentence
// needed one, it was rewritten around it. Everything still owed is listed
// in OPEN ITEMS at the bottom of this file.

export const site = {
    // ⚠ The plan used "Prograde Roof Coating" (intake form). His logo and
    // Facebook page both say "ProGrade Roof Coatings", so the site matches the
    // logo for name consistency with Facebook/Google. Confirm with William.
    name: "ProGrade Roof Coatings",
    short: "ProGrade",
    owner: "William Gorman",
    phone: "(724) 972-8262",
    tel: "+17249728262",
    email: "pgexteriors@icloud.com",
    hic: "PA HIC #PA200235",
    years: 10,
    // Facebook lists the page under Pittsburgh. No street address was given.
    base: "the Pittsburgh area",
    region: "Western Pennsylvania, eastern Ohio, northern West Virginia and Virginia",
    regionShort: "Western PA, eastern Ohio, northern WV and Virginia",
    facebook: "https://www.facebook.com/ProGradeRoofCoatings",
    url: "https://www.prograderoofcoatings.com", // ⚠ placeholder until the domain is known
    // Lead form endpoint (Formspree, Jotform, etc). Until it is set, the form
    // does NOT pretend to send: it tells the visitor to call or text instead.
    leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT || "",
}

// SMS with the prefilled message from the plan (section 3, sticky mobile bar).
export const smsHref = `sms:${site.tel}?&body=${encodeURIComponent("Hi, I'd like a free roof inspection. My address is:")}`
export const telHref = `tel:${site.tel}`

export const nav = [
    { href: "/agricultural-roof-coating", label: "Barn & Farm Roofs" },
    { href: "/metal-roof-coating", label: "Metal Roofs" },
    { href: "/flat-roof-coating", label: "Flat & Rubber Roofs" },
    { href: "/commercial-roof-coating", label: "Commercial" },
    { href: "/residential-roof-coating", label: "Residential" },
    { href: "/roof-coating-vs-replacement", label: "Coating vs Replacement" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
]

export const trust = [
    `${site.years} years coating roofs`,
    site.hic,
    "Fully insured",
    "Free in-person inspections",
    "Written workmanship guarantee",
]

// William's own jobs, from his Facebook page. Captions only state what the
// photos show. Hookstown (Beaver County, PA) is lettered on the building; the
// other towns are not known, so no town is given for them.
const jp = (n) => ({ src: `/media/jobs/${n}-1600.jpg`, srcSet: `/media/jobs/${n}-800.jpg 800w, /media/jobs/${n}-1600.jpg 1600w` })
export const jobs = {
    barn: {
        title: "Red barn, metal roof",
        tag: "Farm building",
        before: { ...jp("barn-red-before"), alt: "Red barn with a rusted metal roof before coating" },
        after: { ...jp("barn-red-after"), alt: "The same red barn with its metal roof coated in bright aluminum" },
    },
    steel: {
        title: "Steel building, full roof",
        tag: "Farm / commercial",
        before: { ...jp("steel-building-before"), alt: "Teal steel building with a faded, rust-brown metal roof before coating" },
        after: { ...jp("steel-building-after"), alt: "The same steel building with its whole roof coated silver" },
    },
    steelAngle: { ...jp("steel-building-after-angle"), alt: "Coated steel building roof seen from the corner of the lot" },
    firehall: { ...jp("firehall-before"), alt: "Hookstown Fire Department metal roof before coating, stained and weathered" },
    firehallCoating: { ...jp("firehall-coating"), alt: "ProGrade crew spraying aluminum coating on the Hookstown Fire Department roof" },
    // Second batch from his Facebook (8 Oct 2026). Same rule: captions say only
    // what the photo shows; no towns, sizes or dates are known for these.
    longBarn: {
        title: "Long barn, full roof",
        tag: "Farm building",
        before: { ...jp("long-barn-before"), alt: "Long open-sided barn with a rusted metal roof before coating" },
        after: { ...jp("long-barn-after"), alt: "The same long barn with its whole roof coated silver" },
    },
    quonset: {
        title: "Quonset building",
        tag: "Farm / storage",
        before: { ...jp("quonset-before"), alt: "Arched Quonset building with rust streaks across the metal" },
        after: { ...jp("quonset-after"), alt: "The same Quonset building coated bright silver" },
    },
    smallBarn: {
        title: "Small barn and run-in",
        tag: "Farm building",
        before: { ...jp("small-barn-before"), alt: "Small wooden barn with a rusted metal roof before coating" },
        after: { ...jp("small-barn-after"), alt: "The same small barn with its roof coated silver" },
    },
    grayBarn: {
        title: "Bank barn",
        tag: "Farm building",
        before: { ...jp("gray-barn-before"), alt: "Weathered gray bank barn with a rusted red metal roof" },
        after: { ...jp("gray-barn-after"), alt: "The same bank barn with its roof coated silver" },
    },
    lowBarn: {
        title: "Low-pitch field barn",
        tag: "Farm building",
        before: { ...jp("low-barn-before"), alt: "Low-pitch barn in an open field with rust stripes along every panel" },
        after: { ...jp("low-barn-after"), alt: "The same field barn with its roof coated bright silver" },
    },
    // His own before/after graphics (logo and labels already on them).
    houseBA: { ...jp("house-ba"), alt: "Before and after: a ranch house's faded metal roof, then coated" },
    houseBlueBA: { ...jp("house-blue-ba"), alt: "Before and after: a blue house's metal roof, then coated" },
    gambrelBA: { ...jp("gambrel-barn-ba"), alt: "Before and after: a rusted gambrel barn roof, then coated" },
    poleShedBA: { ...jp("pole-shed-ba"), alt: "Before and after: a rusted pole shed roof, then coated" },
    redBarnCoated: { ...jp("red-barn-coated"), alt: "Red bank barn with its metal roof freshly coated" },
    rustedPanels: { ...jp("rusted-panels"), alt: "Close-up of rusted metal roof panels before prep" },
}

// ⚠ STOCK, not William's work. He has no flat or rubber roof photos yet
// (none on his Facebook as of 8 Oct 2026). Marc approved stock for the flat
// roof page until he sends his own. Wikimedia Commons; CC BY-SA images MUST
// keep their visible credit. Never caption these as ProGrade jobs.
const sp = (n) => ({ src: `/media/stock/${n}-1600.jpg`, srcSet: `/media/stock/${n}-800.jpg 800w, /media/stock/${n}-1600.jpg 1600w` })
const wm = (file) => `https://commons.wikimedia.org/wiki/File:${file}`
export const stock = {
    epdmFinished: { ...sp("epdm-finished"), alt: "A finished rubber (EPDM) flat roof with a clean parapet edge", credit: null },
    epdmFlat: { ...sp("epdm-flat-roof"), alt: "A rubber (EPDM) flat roof on a city building", credit: { by: "Crownbuild", lic: "CC BY-SA 3.0", licUrl: "https://creativecommons.org/licenses/by-sa/3.0", src: wm("EPDM_rubber_roof_-_Halifax.jpg") } },
    epdmExtension: { ...sp("epdm-extension"), alt: "A rubber flat roof on a home extension", credit: { by: "Crownbuild", lic: "CC BY-SA 3.0", licUrl: "https://creativecommons.org/licenses/by-sa/3.0", src: wm("EPDM_Rubber_flat_roof_Halifax.jpg") } },
    membraneFailure: { ...sp("membrane-failure"), alt: "A worn flat roof membrane cracked across its whole surface", credit: { by: "GRALISTAIR (cropped)", lic: "CC BY-SA 4.0", licUrl: "https://creativecommons.org/licenses/by-sa/4.0", src: wm("Roofing_Membrane_Failure_1.jpg") } },
}

// William's reels. Muted, inline, poster frame shown until played.
const reel = (id, title) => ({ src: `/media/video/reel-${id}.mp4`, poster: `/media/video/reel-${id}.jpg`, title })
export const reels = {
    rust: reel("28388720454130659", "Prepping a rusted roof"),
    seams: reel("1618906662551782", "Every seam and exposed fastener sealed"),
    coating: reel("1303210261383346", "Industrial-grade aluminum coating going on"),
    spray: reel("1411899844253502", "Power washing before any coating"),
    fasteners: reel("1784394462710843", "Seam and fastener prep on a rusted roof"),
    prep: reel("1062770239973040", "Fastener heads and laps sealed before coating"),
    finished: reel("1644228220377979", "Walking a roof before the work starts"),
    wide: reel("1295942102029327", "A long metal roof run"),
}

export const services = [
    {
        href: "/agricultural-roof-coating",
        icon: "barn",
        title: "Barns and farm buildings",
        text: "Bank barns, pole barns, livestock barns, equipment sheds and hay storage. Our main work.",
        img: jobs.barn.after,
    },
    {
        href: "/metal-roof-coating",
        icon: "metal",
        title: "Metal roofs",
        text: "Leaking screws, rusted laps and faded panels sealed and protected without a tear-off.",
        img: jobs.steel.after,
    },
    {
        // William, 8 Oct 2026: he also coats rubber and flat roofs.
        // ⚠ No flat-roof photo of his yet: card uses the public-domain stock image.
        href: "/flat-roof-coating",
        icon: "flat",
        title: "Flat and rubber roofs",
        text: "Rubber (EPDM) and other flat and low-slope roofs sealed and coated without a tear-off.",
        img: null, // set below to public-domain stock until he sends a photo
    },
    {
        href: "/commercial-roof-coating",
        icon: "store",
        title: "Small commercial",
        text: "Shops, garages, warehouses and churches. Your building stays open while we work.",
        img: jobs.firehallCoating,
    },
    {
        href: "/residential-roof-coating",
        icon: "home",
        title: "Homes and garages",
        text: "Metal, rubber and flat roofs on homes, detached garages, porches and outbuildings.",
        img: jobs.steelAngle,
    },
]

export const jobSteps = [
    { title: "Free inspection", text: "We walk the roof, check the panels, screws, seams and flashing, and tell you straight whether coating is the right fix." },
    { title: "Written estimate", text: "You get a price and a scope in writing. Nothing starts until you approve it." },
    { title: "Wash and prep", text: "We power wash the roof, treat rusted areas and seal every seam, lap and fastener." },
    { title: "Coating", text: "We apply the coating across the full roof at the thickness the manufacturer specifies." },
    { title: "Walkthrough", text: "We go over the finished roof with you and hand over your workmanship guarantee and warranty paperwork." },
]

export const whyUs = [
    { icon: "calendar", title: "Ten years coating roofs", text: "Farm buildings are our main work." },
    { icon: "shield", title: "Licensed and insured", text: `You're covered while we're on your property (${site.hic}).` },
    { icon: "clipboard", title: "Free inspection, written estimate", text: "In person, on your roof, with a price in writing." },
    { icon: "badge", title: "Written workmanship guarantee", text: "Plus the coating manufacturer's warranty." },
    { icon: "eye", title: "Straight answers", text: "We'll tell you if your roof needs replacing instead. Coating only goes on roofs it will hold up on." },
]

export const fitTable = {
    good: ["Panels are still solid", "Leaks at seams and screws", "Surface rust", "Faded or chalky paint"],
    replace: ["Panels rusted through in many places", "Rotted purlins or framing", "Roof sagging or structurally failing", "Wet insulation trapped under the panels"],
}

// FAQ answers. Prices, lifespans, job lengths and warranty terms are not
// confirmed yet, so answers say how they are decided rather than inventing numbers.
export const faq = {
    rusty: { q: "Can you coat a rusty roof?", a: "In most cases, yes. Surface rust gets cleaned and treated before any coating goes on. If a panel is rusted through, it needs replacing first, and we'll point that out during the inspection." },
    cost: { q: "How much does it cost?", a: "It depends on the size, pitch and condition of the roof and which coating fits. Coating costs a fraction of a new metal roof, and the inspection and written estimate are free, so you'll know the exact price before anything starts." },
    life: { q: "How long does a coating last?", a: "It depends on the roof, its pitch and the coating used, and we'll give you a straight answer for your roof at the inspection. When the coating wears, the roof can be cleaned and recoated instead of replaced." },
    shutdown: { q: "Do you have to shut down the building?", a: "No tear-off means the building stays in use. We plan around your schedule and let you know ahead of time if an area needs clearing." },
    animals: { q: "Do I need to move animals or equipment?", a: "Usually not for the whole job. We'll tell you ahead of time if an area needs clearing while we wash or coat." },
    season: { q: "What time of year do you coat?", a: "Coatings need dry weather and mild temperatures to cure, so we schedule around the weather. Book an inspection in the off season to get on the schedule early." },
    painted: { q: "Can you coat a painted metal roof?", a: "Yes, as long as the paint is cleaned and any loose or peeling areas are prepped first." },
    color: { q: "Will the roof change color?", a: "Aluminum coating leaves a bright silver finish." },
    cheaper: { q: "Why is coating cheaper than a new roof?", a: "There's no tear-off, no disposal and no new panels. We work with the roof you already have." },
    leaks: { q: "Will a coating stop my leaks?", a: "On a roof that's still structurally sound, yes. Most leaks on metal roofs come from seams, laps and screws, and we seal all of those before coating. If your roof has problems a coating can't fix, we'll tell you at the inspection." },
    warranty: { q: "What warranty do I get?", a: "A written workmanship guarantee from us, plus the coating manufacturer's warranty. We'll go through both in writing with your estimate." },
    duration: { q: "How long does a job take?", a: "It depends on the size of the roof and the weather. You'll get a realistic schedule with your written estimate." },
    home: { q: "Do I need to be home?", a: "Not for the whole job. We'll meet you for the inspection and the final walkthrough." },
    flat: { q: "Do you coat rubber and flat roofs?", a: "Yes. As well as metal, we coat rubber (EPDM) and other flat and low-slope roofs on commercial buildings, garages and homes. We check the seams, flashing and drainage at the inspection and tell you whether coating is the right fix." },
    ponding: { q: "My flat roof holds water. Can it still be coated?", a: "Often, yes. Standing water is one of the things we look at during the inspection, along with the seams and flashing, and we'll tell you straight whether that roof is a good candidate for coating." },
    areas: { q: "What areas do you serve?", a: `${site.region}.` },
    licensed: { q: "Are you licensed and insured?", a: `Yes. We're a registered Pennsylvania home improvement contractor (${site.hic}) and fully insured.` },
    free: { q: "Is the inspection really free?", a: "Yes. No cost and no obligation." },
}

// Service-area pages. The plan's county lists are a best guess from his 724
// area code, so they are NOT published. Each page carries its own paragraph
// (the plan says state pages must not be clones with the name swapped).
export const states = [
    {
        slug: "pennsylvania",
        name: "Pennsylvania",
        card: "Western Pennsylvania",
        cardText: "Our home base. Farm, commercial and residential roofs across Western PA.",
        h1: "Roof Coating in Western Pennsylvania",
        sub: "Barn, metal and commercial roof coating across Western PA from a locally owned, PA-registered contractor.",
        angleTitle: "Built for Western PA weather",
        angle: `Freeze and thaw cycles, heavy snow and wet springs are hard on metal roofs. Water sits at the laps and screws, and that's where rust starts. A sealed and coated roof keeps that water out. We're registered with the Pennsylvania Attorney General (${site.hic}) and carry insurance on every job.`,
        title: "Roof Coating in Western PA | Barns & Metal | ProGrade",
        description: `Barn and metal roof coating across Western Pennsylvania. Registered PA contractor, insured, 10 years in business. Free inspection: ${site.phone}.`,
        proof: "firehall",
    },
    {
        slug: "ohio",
        name: "Ohio",
        card: "Eastern Ohio",
        cardText: "Barns and metal roofs across the state line in eastern Ohio.",
        h1: "Barn and Metal Roof Coating in Eastern Ohio",
        sub: "We cross the state line for farm, commercial and residential coating jobs in eastern Ohio.",
        angleTitle: "Farm country on both sides of the line",
        angle: "Eastern Ohio has the same old bank barns, pole buildings and steel roofs we coat every week in Pennsylvania. Same process, same prep, same written guarantee.",
        title: "Barn & Metal Roof Coating in Eastern Ohio | ProGrade",
        description: `Roof coating for barns, pole buildings and metal roofs in eastern Ohio. Insured, 10 years in business. Free in-person inspections. Call ${site.phone}.`,
    },
    {
        slug: "west-virginia",
        name: "West Virginia",
        card: "Northern West Virginia",
        cardText: "The northern panhandle and north-central counties.",
        h1: "Roof Coating in Northern West Virginia",
        sub: "Barn and metal roof coating in the northern panhandle and north-central West Virginia.",
        angleTitle: "Hill country roofs",
        angle: "Steep sites, long winters and older farm buildings mean a lot of rusted steel roofs in northern West Virginia. We coat them without tear-off, so the building stays in use.",
        title: "Roof Coating in Northern West Virginia | ProGrade",
        description: `Barn and metal roof coating in northern West Virginia. Insured, 10 years in business. Free in-person inspections. Call ${site.phone}.`,
    },
    {
        slug: "virginia",
        name: "Virginia",
        card: "Virginia",
        cardText: "Barn and metal roof coating for farms and businesses in Virginia. Call to check your county.",
        h1: "Roof Coating in Virginia",
        sub: "Barn and metal roof coating for farms and businesses in Virginia.",
        angleTitle: "Call to check your county",
        angle: `We take on coating work in Virginia. Before we book an inspection, call or text ${site.phone} with your town and we'll tell you straight whether we can get to you.`,
        title: "Roof Coating in Virginia | ProGrade Roof Coatings",
        description: `Barn and metal roof coating in Virginia. Insured, 10 years in business. Free in-person inspections. Call ${site.phone}.`,
        // Region and VA licence (DPOR) unconfirmed: kept out of search until then.
        noindex: true,
    },
]

export const privacyNotice =
    "We collect the details you enter in our forms (name, phone, email, ZIP code, building details and any photo you upload) and use them only to contact you about your inspection and estimate and to do the work if you hire us. We do not sell your information. If you reach us through a Facebook ad, Meta may record that you submitted a form so we can measure our ads."

/*
 * ⚠ OPEN ITEMS — need William before launch (see the plan, section 8)
 *
 * 1. NAME + DOMAIN. Site uses "ProGrade Roof Coatings" (logo/Facebook). The
 *    plan and his email say Prograde Roof Coating / PG Exteriors. `site.url`
 *    is a placeholder.
 * 2. LEAD FORM. No endpoint yet. Set NEXT_PUBLIC_LEAD_ENDPOINT (Formspree or
 *    similar, needs file upload for the roof photo). Until then the form
 *    shows a call/text panel instead of claiming it sent.
 * 3. PRICES, LIFESPAN, JOB LENGTH, WARRANTY TERMS, REPLY TIME. Not stated
 *    anywhere. Copy explains how each is decided. Add his numbers when known.
 * 4. COUNTIES. Plan lists likely counties per state from the 724 area code.
 *    Not published until he confirms.
 * 5. VIRGINIA. Region and DPOR licence unknown. Page is noindex and says
 *    "call to check your county".
 * 6. WV / VA / OHIO LICENCES. None claimed. Only the PA HIC number is shown.
 * 7. COATING BRAND. His reels say "industrial grade aluminum coating" and
 *    "commercial-grade" seam sealant. Brand and manufacturer warranty unknown.
 * 8. PHOTO OF WILLIAM for About. None yet; About uses a job photo.
 * 9. META PIXEL + GA4 IDs. /thank-you fires Lead / generate_lead only if
 *    fbq / gtag exist, so nothing breaks before they are added.
 * 11. FLAT + RUBBER ROOFS (added 8 Oct 2026 at William's request). Page
 *    uses STOCK photos (`stock` above) until he sends his own. Need
 *    photos of his flat/rubber jobs, which coating he uses on them, and
 *    whether he also does TPO, modified bitumen or built-up roofs. The copy
 *    only names rubber (EPDM) and flat/low-slope roofs.
 * 10. REVIEWS. None. No review section, stars or counts anywhere.
 */

// Home card for flat roofs uses the public-domain stock photo (no credit needed).
services.find((x) => x.href === "/flat-roof-coating").img = stock.epdmFinished
