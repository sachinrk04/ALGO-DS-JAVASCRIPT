Assumptions------

    1. User profile creation is provided
    2. Product Onboarding is provided
    3. Payment service is provided

Requirement-------

    Functional

        1. Search Product
        2. Recommendations on Homepage
        3. Place Order
        4. Check order status
        5. Write/view product reviews

    Non-Functional

        1. Low latency (Recommendations & Search)
        2. High Consistency (Placing order, order status, and Payments)

Capacity Estimations:--------
Active User:

        300M Monthly Active users
        each user search for 10 product a month
        = 300M * 10 Search/month
        = 3B Search / (30 days * 24 hours * 60 mins * 60 seconds)
        = 3 * 10^9 / (30*10^5)
        = 1k Searches/second

Total Product: 10M
Assume: 1 Product require 10MB storage (Images + Description)
Total Product storage:

        = 10M * 10MB
        = 10 * 10^6 * 10 * 10^6
        = 100 * 10^12
        = 100TB storage required to store all product information
