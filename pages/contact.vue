<template>
  <section class="contact">
    <h1>{{ $t('contact.title') }}</h1>
    <p class="fade-up" v-html="$t('contact.description')"></p>
    <form
      ref="contact"
      method="post"
      class="contact__form fade-up"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="submit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="contact__form--item contact__form--name">
        <label for="name" :class="{ error: $v.name.$error }">{{
          $t('contact.form')
        }}</label>
        <input
          id="name"
          v-model="name"
          type="text"
          @blur="$v.name.$touch()"
        />
      </div>
      <div v-if="$v.name.$error">
        <div v-if="!$v.name.required" class="errorMessage">
          {{ $t('contact.error[0]') }}
        </div>
      </div>

      <div class="contact__form--item contact__form--email">
        <label for="email" :class="{ error: $v.email.$error }"
          >Email</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          @blur="$v.email.$touch()"
        />
      </div>
      <div v-if="$v.email.$error">
        <div v-if="!$v.email.email" class="errorMessage">
          {{ $t('contact.error[1]') }}
        </div>
        <div v-if="!$v.email.required" class="errorMessage">
          {{ $t('contact.error[0]') }}
        </div>
      </div>

      <div class="contact__form--item contact__form--message">
        <label for="message" :class="{ error: $v.message.$error }"
          >Message</label
        >
        <textarea
          id="message"
          v-model="message"
          @blur="$v.message.$touch()"
        ></textarea>
      </div>
      <div v-if="$v.email.$error">
        <div v-if="!$v.message.required" class="errorMessage">
          {{ $t('contact.error[0]') }}
        </div>
      </div>

      <div class="contact__form--item contact__form--legal">
        <input
          id="legal"
          v-model="isChecked"
          type="checkbox"
          @change="$v.isChecked.$touch()"
        />
        <label
          for="legal"
          class="label-legal"
          :class="{ error: $v.isChecked.$error }"
          >{{ $t('contact.terms[0]') }}
          <nuxt-link :to="{ name: 'legal' }" class="body-link">{{
            $t('contact.terms[1]')
          }}</nuxt-link></label
        >
      </div>

      <div class="hidden">
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </div>

      <div class="contact__form--button">
        <button type="submit" :disabled="$v.$invalid">
          <base-button-plane
            class="plane"
            :class="{
              errorPlane: $v.$invalid,
            }"
          />
        </button>
      </div>
      <div v-if="!isSubmitted">
        <p>{{ $t('contact.submit[0]') }}</p>
      </div>
      <div v-else>
        <p>{{ $t('contact.submit[1]') }}</p>
      </div>
    </form>
  </section>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';
gsap.registerPlugin(MotionPathPlugin);

export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      isChecked: false,
      isSubmitted: false,
    };
  },
  mounted() {
    gsap.from('.fade-up', {
      y: '4rem',
      opacity: 0,
      duration: 1,
      stagger: 0.25,
    });
  },
  validations: {
    name: { required },
    email: {
      required,
      email,
    },
    message: { required },
    isChecked: {
      cheched(val) {
        return val;
      },
    },
  },
  methods: {
    submit() {
      this.isSubmitted = true;
      gsap.to('.plane', {
        duration: 5,
        motionPath: {
          path: [
            { x: 100, y: 50 },
            { x: 2000, y: -500 },
          ],
        },
      });
      const contactForm = this.$refs.contact;
      const formData = new FormData(contactForm);
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      })
        .then()
        .catch((error) => alert(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 60rem;
  margin: 5rem auto;

  @include respond(phone) {
    margin: 2rem;
  }

  p {
    flex: 0 1 100%;
    max-width: 60rem;
  }

  &__form {
    flex: 0 1 100%;
    max-width: 60rem;
    margin: 5rem 0 10rem;

    &--item {
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

      .label-legal {
        font-size: var(--small);
        margin-bottom: 1rem;
      }
      // custom checkbox - START
      input[type='checkbox'] {
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }

      input[type='checkbox'] + label {
        display: block;
        position: relative;
      }

      input[type='checkbox'] + label::before {
        content: '';
        position: relative;
        display: inline-block;
        margin-right: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        background: white;
        color: white;
        border: 1px solid var(--grey-dark);
      }
      input[type='checkbox']:checked + label::before {
        background: var(--primary);
      }
      input[type='checkbox']:focus + label::before {
        outline: 1px solid var(--grey-medium-dark);
      }
      // Custom checkbox - END
      input,
      textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--grey-dark);
        color: rgba(0, 0, 0, 0.5);
        padding: 1rem 0;
        font-family: 'Muli', sans-serif;
        font-size: var(--normal);
      }
    }

    &--button {
      margin-top: 2rem;

      button {
        background-color: transparent;
        border: none;
        transition: 0.2s ease-in;

        svg {
          width: 8rem;
          height: 8rem;
          fill: none;
          stroke: var(--grey-dark);
          stroke-width: 0.5px;
        }
      }
    }
  }
}
.hidden {
  display: none;
}

.errorMessage {
  font-family: 'Muli', sans-serif;
  font-size: 1.2rem;
  color: var(--grey-dark);
  margin-top: 0.5rem;
}

.error {
  color: var(--primary);
}

.errorPlane {
  transform: rotate(45deg);
}
</style>
