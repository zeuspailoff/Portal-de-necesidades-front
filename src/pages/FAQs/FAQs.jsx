import Header from "../../components/Header/Header.jsx"
import './FAQS.css'
const Faqs = () => {

    return (
        <div>
            <Header />
            <h2 className="help_please">Needing some help?</h2>

            <div className="faqs">
            <div className="clients">
                <h3>Clients FAQs</h3>
                <details className="faq_details">
                    <summary className="faq_question">What is I need up for?</summary>
                    <p className="faq_answer">It is a platform for freelancers to offer their services in several fields.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How to edit your profile</summary>
                    <p className="faq_answer">From <a href="/profile">here</a> you can edit your username, description, profile picture, etc.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">I forgot my password </summary>
                    <p className="faq_answer"><a href="">Click here</a> to reset your password.</p>
                </details>
                <details className="faq_details">
                    <summary className="faq_question">How to post a demand </summary>
                    <p className="faq_answer">From <a href="/demands/new">demand</a> you can click on add new demand, describe what you need and upload files if required.</p>
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
                    <summary className="faq_question">Profile changes</summary>
                    <p className="faq_answer">From <a href="">here</a> you can edit your username, description, profile picture, etc.</p>
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