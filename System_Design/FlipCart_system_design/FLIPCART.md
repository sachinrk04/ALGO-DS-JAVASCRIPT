Build Configurable

Functional Requirements:-------------------------------------------------------------------------------

    1. Navigation bar
        Search component
        Account details
        Shopping cart

        Categories and sub categories (nav level 2)

    2. Ads: differnt priorities
        Carousel
        Product carts
        Recommendation carts
        Card

Non-functional Requirements:---------------------------------------------------------------------------
Performance:
first time load,
FCP (First Contentful Paint):
What is First Contentful Paint?
First Contentful Paint (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading. The question "Is it happening?" is "yes" when the first contentful paint completes.

                The First Contentful Paint timestamp is when the browser first rendered any text, image (including background images), video, canvas that had been drawn into, or non-empty SVG. This excludes any content of iframes, but includes text with pending webfonts. This is the first time users could start consuming page content.

            How to improve First Contentful Paint?
                1) Eliminate render-blocking resources.
                2) Minify CSS.
                3) Remove unused CSS.
                4) Remove unused JavaScript.
                5) Preconnect to required origins.
                6) Reduce server response times (TTFB)
                7) Avoid multiple page redirects.
                8) Preload key requests.

        TTI (Time to Interactive):
            What is Time to Interactive?
                Time to Interactive (TTI) is a non-standardized web performance 'progress' metric defined as the point in time when the last Long Task finished and was followed by 5 seconds of network and main thread inactivity.

            How to improve Time to Interactive?
                1) Reducing JavaScript execution time.
                2) Minimizing main-thread work.
                3) Removing unused JavaScript.
                4) Reducing the impact of third-party code.
                5) Replacing large JavaScript libraries with smaller alternatives.
