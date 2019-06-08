---
title: How To Communicate Tech Debt In Your Organization
date: "2018-03-07T12:07:00.301Z"
template: "post"
draft: false
slug: "/posts/how-to-communicate-tech-debt/"
tags:
  - "Tech Debt"
  - "Communication"
  - "Team Lead"
description: "Some types of tech debt can not be paid gradually and will require long & focused effort to solve..."
---

![techdebt](/media/tech-debt.jpg)

### WIIFM (what’s in it for me)

1.  Two main reasons why you can’t pay bit by bit some types of tech debt.
2.  Understanding the challenge of communicating such tech debt to non technical decision makers.
3.  How to estimate the impact of solving the tech debt and justify the effort investment.
4.  The effect of communicating impact through money.
5.  Related positive side-effects when paying tech debt.

### Context first

Migrating to new technologies or frameworks. Adding infrastructure layers. Improving automation and processes. In many of those cases it doesn’t make sense to invest gradual effort as you go, here are two main reasons why:

*   **Might take ages** —gradual effort inevitably labels the project as “important but not urgent”. It will naturally take longer to finish while your team needed its impact yesterday.
*   **Coexistence complexity **— both “old way” and “new way” of doing things will coexist in your system for a long time. That will add complexity to your code and unnecessary micro-decisions for your team.

If you’ve been dealing with software development for a while, you should already know that tech debt is better paid sooner than later. Like loans, it tends to accumulate interest as your code & business grow.

### The communication challenge

Most CEOs don’t understand how a 2 months long API gateway project will help grow their business. Your finance officer doesn’t get how migrating to a new front-end framework will increase revenue. Your Sales manager doesn’t see how 4 silly letters like CI/CD will result in more satisfied customers.

You get the point, there’s a communication barrier here. You need to translate the impact on your team to a language they understand and **it’s money**.

It’s much more convincing if you could roughly estimate how such a project will increase the productivity, or in other words: **Increase the ROI (return on investment) for each $ spent on your team.**

### Converting impact to money

This estimation uses unit economics approach and includes 3 steps:

1.  **Investment **— estimating the monthly cost of your team.
2.  **Impact**— estimating the project’s impact and cost.
3.  **Return** — comparing your team return(ROI) with and without the project.

### 1\. Investment

What’s the cost of running your team for a whole month? this is how you can calculate it:

#### **Number of employees**

How many workers are contributing to your team? for example: 5 developers +1 team leader +1 product manager + 0.5 designer +0.5 QA = 8 workers.

#### Salaries

Use public average salaries statistics if such data isn’t available for you.

#### Employer’s fees

Your organization pays extra expenses per employee: health insurance, savings, meals, facilities, hardware, software, etc... it’s acceptable to consider it as 33% on top of every salary.

![monthly-team-cost](/media/monthly-team-cost.jpg)

### 2\. Impact

Estimate the project’s impact on your team, how long it will last and what it takes to finish.

#### Return increase

Experience is needed when estimating how your team productivity and efficiency is going to improve once the project is finished. You’ll want to consult with your team and others with relevant experience, read online and use your technical intuition. Eventually you should come up with an estimation as follows: **The project will result in X increase of my team’s return**.

#### Impact period

Nothing good lasts forever, technologies and business needs will change. Predict how long the project impact will preserve. For example: if migrating to a newer front-end framework is the case then such a change is probably going to stay impactful during the next 3–4 years.

#### Impact cost

How much effort in months is required to finish the project, for example: 3 months of the whole team or 6 months involving only half the team.

![convet-impact-to-money](/media/convert-impact-to-money.jpg)

### 3\. Return

Now all that’s left is to subtract the impact cost from the impact to money conversion and we will get a number which represents the costs saving.

![team-cost-saving](/media/team-cost-saving.jpg)

### Example

8 employees X $6,250 average salary X 1.33 employers fees = **$66,500 monthly team cost**.

Migrating to a new front-end framework will take **4 months of the whole team** and will result in **40% (0.4) productivity increase** which will last for at least **3 years (36 months).**

0.4 X  $66,500 X 36 = **$957,600 project impact converted to money.**

4 X $66,500 = **$266,000 impact** cost.

$957,600 - $266,000 **= $691,600 in costs saving per 3 years.**

### Effects

Even if not entirely accurate, all of a sudden there’s a number to relate to, your ambitious, time consuming tech debt payment project is starting to resonate in the heads of your CEO, CFO or any other non technical decision maker. Now it’s easier to prioritize and compare your project with the next planned feature or acquisition of new paying customers.

### Side effects

Investing in tech debt payments brings other positive outcomes which can all be converted to money:

*   **Employees retention** — dealing with up-to-date technologies, reducing frustration and increasing development happiness will make sure that your dear team members will stay by your side longer.
*   **Cross organization improvement **— increasing productivity goes beyond your team costs. With more available time in their hands, they are now free to research, chase other business goals and contribute to other departments like sales & marketing.
*   **Everyone thinks business **— framing communication & discussion with concepts of unit economics and ROI will help drawing a clearer picture of what’s good for the business.

Clear communication is crucial to your organization success. As technical employee or leader it’s your responsibility to translate your team work and experience to information decision makers can understand and act accordingly.