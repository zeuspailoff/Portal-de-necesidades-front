/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header/Header.jsx"
const Faqs = () => {

    return (
        <div>
            <Header />
            <h2>Needing some help?</h2>

            <div className="faqs">
            <div className="clients">
                <h3>Clients FAQs</h3>
                <details className="faq_details">
                    <summary className="faq_question">What is I need up for?</summary>
                    <p className="faq_answer">It is a platform for freelancers to offer their services in several fields.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Getting Started</summary>
                    <p className="faq_answer">The first thing will be to <a href="/signup">register</a>.Then create a profile with your information and the type of services you require. You will be able to see your proposals and post your demands.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How to edit your profile</summary>
                    <p className="faq_answer">From <a href="">here</a> you can edit your username, description, profile picture, etc.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">I forgot my password </summary>
                    <p className="faq_answer"><a href="">Click here</a> to reset your password.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How to post a demand </summary>
                    <p className="faq_answer">From <a href="/demand">demand</a> you can click on add new demand, describe what you need and upload files if required.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">I have issues with a freelancer</summary>
                    <p className="faq_answer">Don't worry, we will act as intermediaries between the freelancer and you to solve any problem. <a href="">Contact us here.</a></p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How to pay my freelancer </summary>
                    <p className="faq_answer">In the profile of your freelancer you will find their email associated with PayPal, to which you will have to make the transfer.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Is the payment method secure?</summary>
                    <p className="faq_answer">Yes, it is completely secure and payment won't be effective until you confirm that you have received the work and are happy with the result.</p>
                </details>
            </div>
            <div className="freelancers">
                <h3>Freelancers FAQs</h3>
                <details className="faq_details">
                    <summary className="faq_question">How to find demands</summary>
                    <p className="faq_answer">Go to <a href="/demands">demands</a>, there you can filter by categories, scores and more.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How do I post a proposal?</summary>
                    <p className="faq_answer">Once you find a demand that fits the services you offer, you will have the option to upload a file with your proposal.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How do I get paid?</summary>
                    <p className="faq_answer">The most used method is through PayPal, once the client is satisfied with your work, he will make the transfer.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Highlight profile</summary>
                    <p className="faq_answer">To make your profile stand out, we recommend uploading previous jobs as a portfolio and submitting as many proposals as possible.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Profile changes</summary>
                    <p className="faq_answer">From <a href="">here</a> you can edit your username, description, profile picture, etc.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Claim payment</summary>
                    <p className="faq_answer">If the work is finished and the client is satisfied but you have not received the payment, <a href="">contact us</a>.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Who can see my scores?</summary>
                    <p className="faq_answer">All registered users can see your scores.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">Can anyone vote for my works?</summary>
                    <p className="faq_answer">Only your clients can leave reviews about your work.</p>
                </details>
            </div>
            </div>
        </div>
    )
}
export default Faqs;