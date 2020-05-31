import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import gvomockup from '../assets/images/gvomockup.png'


const Generic = props => (
  <Layout>
    <Helmet>
      <title>Applied Medical</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
    <header className="major" style={{textAlign: "center"}}>
            <h1>Golden Vision Optometry</h1>
          </header>
          <span className="image main">
           
          </span>

          <h2>Introduction</h2>

I worked directly with the doctors, opticians, and sales in order to create marketing materials, flyers, e-mail blasts, and advertising campaigns in order to promote designer brands such as IC Berlin, Rayban, and Tiffany & Co.
<h2>Role</h2>

Web Design / Digital Marketing Associate / Graphic Designer
<h2>Challenge</h2>

"While working at an optometric small business, the website needed content updates and a visual overhaul. I wanted to improve user experience, improve digital marketing, and attract potential new patients."

<h2>Research</h2>

I interviewed patients and asked them about their eye appointment, and what could be done better to make a better patient experience. The discussions that I had suggested that patients would like to be more connected digitally online to schedule and remind them of their annual eye appointments for an overall smoother process. I was able to develop a user persona for the ideal individual who would be using Golden Vision Optometry website. The user needs that I’ve gathered are listed below:

    Text/e-mail reminders for annual recall and upcoming appointments

    Online appointment scheduling and availability

    Easier navigation on website

<h2>Site Audit</h2>

    The main user flows (online appointment scheduling + contacts reordering) were hard to navigate and not intuitive.

    Information architecture can be improved and navigation items can be put in collapsible menus and subcategories.

    Medical informational content with doctors and staff profiles needed to be updated.

    The website visually needed to be brought up to trends and standards.

    The business website was not SEO optimized with metatags and descriptions.

    Mobile viewing and responsive page viewing was non-existent.

<h2>Goals</h2>

Improve Usability - a website for mobile and desktop will allow users to find office and medical information more efficiently. 

Increases click through rates on call to actions for booking appointments.

Update clean and modern visuals branding to attract a diverse patient base and make the website more appealing.

<h2>User Feedback / Iterations</h2>
<div>
<img src={gvomockup} style={{borderRadius: "8px", width: '45vw'}} alt="" />
In the first iteration, my design thinking was to create strong visual call to actions with the six block display, allowing the patient to reach necessary information about the practice as they scroll down the page. Each section banner of the front page and individual page uses parallax display in order to emulate a one page flow while scrolling through the page, thus bringing attention to important items and easier readability.

I applied heatmapping concepts using Hotjar to find the placement of the main CTA (request an appointment). Through my observations, I found out that many users preferred the left and center of the screen while scanning the screen as opposed to the right side of the screen.

Some difficulties that I encountered during this project was media queries. I  had to make the text and images responsive across different screen sizes and mediums, but this was later solved after users informed me.

The blog carousel at the bottom the page had strong activity, and allows the patients to read fun information about the practice, as well as increase SEO visibility by creating new and informative content.
</div>
<h2>Analysis</h2>
<p>
This project gave me an opportunity demonstrate my design and branding skills for a small business website. By working directly with patients and doctors, I was able to formulate ideas for user needs and the corresponding solutions. I was able to design and create a website with a proper information architecture, allowing patients to increase readability and finding important medical information and increase the accessibility to schedule appointments online. In future redesigns, I would improve on my front end development skills and design different types of layouts.
</p>
<p>Here is a summary of the results achieved:</p>

    Developed a social media content plan for optometry and eye care health information.

    SEO on Google is ranked consistently on the front page results with an avg. position 20.91.

    Instagram / Facebook media growth in followers and social media events.

    Google Analytics reported growth in almost 29% activity in the past month.

    Online appointment system scheduling implemented improved office efficiency and bookings.

    Impression rate of ~3,400 with over 500 unique visitors and a click rate of 2.09% in the month of Sept.
        </div>
  

    <Tabs />
  </Layout>
 


)

export default Generic
