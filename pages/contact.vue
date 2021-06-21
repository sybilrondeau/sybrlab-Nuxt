<template>
  <section class="contact anim-text">
    <p v-html="$t('contact.description')"></p>
    <form action="" method="post" class="contact__form">
      <div class="contact__form--item contact__form--name">
        <label for="name">Nom - Entreprise</label>
        <input
          id="name"
          type="text"
          name="user_name"
          value="John Doe"
        />
      </div>
      <div class="contact__form--item contact__form--email">
        <label for="mail">Email</label>
        <input
          id="mail"
          type="email"
          name="user_mail"
          value="john@doe.com"
        />
      </div>
      <div class="contact__form--item contact__form--message">
        <label for="message">Message</label>
        <textarea id="message" name="user_message">
Bonjour, j'ai besoin d'un dev Front-end pour ma super app, êtes-vous disponible ?</textarea
        >
      </div>
      <div class="contact__form--button">
        <button type="submit"><icon-plane /></button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;

  &__form {
    margin-top: 5rem;

    &--item {
      flex: 0 1 100%;
      display: flex;
      flex-direction: column;
      margin-top: 4rem;
      font-family: 'Muli', sans-serif;
      font-size: var(--small);

      label {
        font-family: 'Exo', sans-serif;
        font-weight: 600;
        font-size: var(--normal);
      }

      input,
      textarea {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid var(--grey-dark);
      }

      input[value],
      textarea {
        color: rgba(0, 0, 0, 0.5);
        padding: 1rem 0;
        font-family: 'Muli', sans-serif;
      }

      textarea {
        min-width: 10rem;
      }
    }

    &--button {
      margin-top: 2rem;

      button {
        background-color: transparent;
        border: none;

        svg {
          width: 8rem;
          height: 8rem;
          fill: var(--grey-dark);
        }
      }
    }
  }
}
</style>
