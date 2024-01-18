/* eslint-disable react/no-unescaped-entities */
import Browser from "../../components/Browser/Browser"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
const FAQs = () => {

    return (
        <div>
            <Header />
            <h2>Needing some help?</h2>
            <Browser />
            <div className="clients">
                <h3>Clients FAQs</h3>
                <details>
                    <summary>What is I need up for?</summary>
                    <p>It is a platform for freelancers to offer their services in several fields.</p>
                </details>
                <details>
                    <summary>Getting Started</summary>
                    <p>The first thing will be to <a href="/signup">register</a>.Then create a profile with your information and the type of services you require. You will be able to see your proposals and post your demands.</p>
                </details>
                <details>
                    <summary>How to edit your profile</summary>
                    <p>From <a href="">here</a> you can edit your username, description, profile picture, etc.</p>
                </details>
                <details>
                    <summary>I forgot my password </summary>
                    <p><a href="">Click here</a> to reset your password.</p>
                </details>
                <details>
                    <summary>How to post a demand </summary>
                    <p>From <a href="/demand">demand</a> you can click on add new demand, describe what you need and upload files if required.</p>
                </details>
                <details>
                    <summary>I have issues with a freelancer</summary>
                    <p>Don't worry, we will act as intermediaries between the freelancer and you to solve any problem. <a href="">Contact us here.</a></p>
                </details>
                <details>
                    <summary>How to pay my freelancer </summary>
                    <p>In the profile of your freelancer you will find their email associated with PayPal, to which you will have to make the transfer.</p>
                </details>
                <details>
                    <summary>Is the payment method secure?</summary>
                    <p>Yes, it is completely secure and payment won't be effective until you confirm that you have received the work and are happy with the result.</p>
                </details>
            </div>
            <div className="freelancers">
                <h3>Freelancers FAQs</h3>
                <details>
                    <summary>How to find demands</summary>
                    <p>Go to <a href="/demands">demands</a>, there you can filter by categories, scores and more.</p>
                </details>
                <details>
                    <summary>How do I post a proposal?</summary>
                    <p>Once you find a demand that fits the services you offer, you will have the option to upload a file with your proposal.</p>
                </details>
                <details>
                    <summary>How do I get paid?</summary>
                    <p>The most used method is through PayPal, once the client is satisfied with your work, he will make the transfer.</p>
                </details>
                <details>
                    <summary>Highlight profile</summary>
                    <p>To make your profile stand out, we recommend uploading previous jobs as a portfolio and submitting as many proposals as possible.</p>
                </details>
                <details>
                    <summary>Profile changes</summary>
                    <p>From <a href="">here</a> you can edit your username, description, profile picture, etc.</p>
                </details>
                <details>
                    <summary>Claim payment</summary>
                    <p>If the work is finished and the client is satisfied but you have not received the payment, <a href="">contact us</a>.</p>
                </details>
                <details>
                    <summary>Who can see my scores?</summary>
                    <p>All registered users can see your scores.</p>
                </details>
                <details>
                    <summary>Can anyone vote for my works?</summary>
                    <p>Only your clients can leave reviews about your work.</p>
                </details>
            </div>
            <Footer />
        </div>
    )
}
export default FAQs