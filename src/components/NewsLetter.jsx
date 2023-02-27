import React from "react";

function NewsLetter() {
  return (
    <>
      <div class="widget widget-newsletter">
        <h5>Subscribe To Our Newsletter</h5>
        <p>No spam, notifications only about new products, updates.</p>
        <form action="#" class="newslettre-form">
          <div class="form-flex">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email Adress"
                required="required"
              />
            </div>
            <button class="btn-custom" type="submit">
              Subscribe now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
