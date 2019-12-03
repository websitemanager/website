<template>
  <section class="section contact has-background-white-ter is-medium">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <figure class="image is-4by3">
            <img src="@/assets/working.png" />
          </figure>
        </div>
        <div class="column is-half is-offset-1">
          <h3 class="title is-3">Contact</h3>
          <form action="https://formspree.io/mzbzgqad" method="POST">
            <b-field label="Name">
              <b-input required placeholder="e.g. Alex Smith" name="name"></b-input>
            </b-field>

            <b-field label="Email">
              <b-input type="email" required
                       placeholder="e.g. alexsmith@gmail.com" name="_replyto"></b-input>
            </b-field>

            <b-field label="Message">
              <b-input type="textarea" required
                       placeholder="e.g. Your message..." name="message"></b-input>
            </b-field>

            <b-field>
              <p class="control">
                <button class="button is-primary">
                  Send message
                </button>
              </p>
            </b-field>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Contact',
};
</script>
