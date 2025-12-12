import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <>
    <main class="container-xl py-5">
        <div class="contact-header">
            <h1 class="display-5 fw-bold">Get In Touch</h1>
            <p class="text-secondary lead">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="info-card">
                    <i class="bi bi-geo-alt info-icon"></i>
                    <h5 class="fw-bold">Visit Us</h5>
                    <p class="text-secondary mb-0">123 Activewear Blvd<br/>New York, NY 10012</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card">
                    <i class="bi bi-telephone info-icon"></i>
                    <h5 class="fw-bold">Call Us</h5>
                    <p class="text-secondary mb-0">+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info-card">
                    <i class="bi bi-envelope info-icon"></i>
                    <h5 class="fw-bold">Email Us</h5>
                    <p class="text-secondary mb-0">support@4411active.com<br/>sales@4411active.com</p>
                </div>
            </div>
        </div>

        <div class="row g-5">
            <div class="col-lg-6">
                <div class="form-container">
                    <h3 class="fw-bold mb-4">Send a Message</h3>
                    <form>
                        <div class="mb-3">
                            <label class="form-label text-secondary small fw-bold">FULL NAME</label>
                            <input type="text" class="form-control" placeholder="John Doe"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-secondary small fw-bold">EMAIL ADDRESS</label>
                            <input type="email" class="form-control" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-secondary small fw-bold">ORDER NUMBER (OPTIONAL)</label>
                            <input type="text" class="form-control" placeholder="#12345"/>
                        </div>
                        <div class="mb-4">
                            <label class="form-label text-secondary small fw-bold">MESSAGE</label>
                            <textarea class="form-control" rows="5" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" class="btn btn-submit w-100">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="map-container">
                    <div class="text-center">
                        <i class="bi bi-map fs-1 mb-2"></i>
                        <p>Google Map Will Load Here</p>
                    </div>
                </div>
                <div class="mt-4">
                    <h5 class="fw-bold">FAQ</h5>
                    <div class="accordion accordion-flush" id="faqAccordion">
                        <div class="accordion-item bg-transparent">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                    What is your return policy?
                                </button>
                            </h2>
                            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-secondary">
                                    We accept returns within 30 days of purchase for unworn items with tags attached.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item bg-transparent">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    Do you ship internationally?
                                </button>
                            </h2>
                            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-secondary">
                                    Yes! We ship to over 50 countries. Shipping rates are calculated at checkout.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Contact