import React from 'react';

const Details = () => {
  return (
    <div className='container p-5 '>
      <div>
        <h3 className='mb-5'>What is Try and Buy Service?</h3>
      </div>
      <div id='accordion'>
        <div className='card'>
          <div className='card-header' id='headingOne'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link text-dark'
                data-toggle='collapse'
                data-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id='collapseOne'
            className='collapse show'
            aria-labelledby='headingOne'
            data-parent='#accordion'
          >
            <div className='card-body'>
              This service entitles you to try out your purchases at the time of
              delivery, pay only for what you like and return the rest
              on-the-spot. Try and Buy is a paid service, available on most of
              the products and in 31 Cities, you can enter pin code on product
              page to check service availability. Try and Buy is only available
              on orders containing &lt;=5 items in cart. To avail this service
              min. order value should be Rs.1199 and above. To avail the
              service, please ensure that you tick the 'Try and Buy' box on
              check-out page and choose delivery address where you are
              comfortable trying product. Terms of service may differ for our
              new customers. Try and Buy will not be available during big sale
              days; We will re-offer the service, post such events.
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingTwo'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed text-dark'
                data-toggle='collapse'
                data-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                How will I detect fraudulent emails/calls seeking sensitive
                personal and confidential information?
              </button>
            </h5>
          </div>
          <div
            id='collapseTwo'
            className='collapse'
            aria-labelledby='headingTwo'
            data-parent='#accordion'
          >
            <div className='card-body'>
              If you receive an e-mail, a call from a person/association
              claiming to be from Myntra seeking sensitive confidential
              information like debit/credit card PIN, net-banking or mobile
              banking password, we request you to never provide such
              confidential and personal data. We at Myntra or our affiliate
              logistics partner never ask for such confidential and personal
              data. If you have already revealed such information, report it
              immediately to an appropriate law enforcement agency. Here are a
              couple of baits fraudsters often use to cheat consumers:
              Congratulations! You have been nominated as a ‘Top Myntra
              customer’ and are now eligible for a luxury gift item. Please
              share your proof of address and your debit/credit card details to
              avail this great offer. Hi, I’m calling from Myntra. We are happy
              to let you know that you have won an exclusive lucky draw coupon
              of Rs. 5000 on your latest purchase. Please share your
              credit/debit card number so we can credit the money directly into
              your bank account.
            </div>
          </div>
        </div>
        <div className='card '>
          <div className='card-header' id='headingThree'>
            <h5 className='mb-0'>
              <button
                className='btn btn-link collapsed text-dark'
                data-toggle='collapse'
                data-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                How will I identify a genuine appointment letter?
              </button>
            </h5>
          </div>
          <div
            id='collapseThree'
            className='collapse'
            aria-labelledby='headingThree'
            data-parent='#accordion'
          >
            <div className='card-body'>
              Please beware of the fraudulent individuals/agencies that are
              enticing job seekers by promising them career opportunities at
              Myntra in lieu of 1.) recruitment fee 2.) processing fee 3.)
              security deposit 4.) software or equipment charges 5.) on-boarding
              charges etc. Please be cautious that, Myntra and its recruitment
              partners never ask for any fee in exchange for an offer letter or
              interview calls. All offer related communications are sent from an
              official Myntra email id only.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
