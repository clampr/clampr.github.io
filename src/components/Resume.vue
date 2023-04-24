<script setup lang="ts">
import { ref } from 'vue';
import deepmerge from 'deepmerge';
import english from '@/translations/en';
import german from '@/translations/de';
import combineMerge from '@/utilities/combine-merge';
import Section from './Section.vue';
import Box from './Box.vue';
import Experience from './Experience.vue';
import Certifications from './Certifications.vue';
import Skills from './Skills.vue';

// Resume data
const data: any = ref(english);

// Language data
const languages = ['en', 'de'];
const lang = ref(languages[0]);
const translateLabel = ref(languages[1]);
const componentKeyAppendix = ref(0);

// Translate resume
const translate = () => {
  translateLabel.value = lang.value;
  lang.value = languages.find((l) => l !== lang.value) as string;

  data.value = deepmerge(english, lang.value === 'de' ? german : {}, {
    arrayMerge: combineMerge
  });
  componentKeyAppendix.value += 1;
};
</script>

<template>
  <div class="row no-gutters h-100">
    <!-- Main Heading -->
    <h1 class="d-none">{{ data.name }} • {{ data.occupation }}</h1>

    <!-- Main Column -->
    <div class="resume col-12 col-sm-8 col-lg-9 px-4 py-5 bg-white">
      <!-- Translation Alert -->
      <Box class="language-alert d-print-none fw-bold px-4 mb-5 rounded-0" @click="translate" role="button">
        <i class="fa-solid fa-arrow-pointer me-3"></i>
        <span>{{ data.languageAlert }}</span>
      </Box>

      <!-- Summary -->
      <Section :title="data.name" icon="fa-solid fa-user" class="summary">
        <Box v-html="data.about"></Box>
      </Section>

      <!-- Work Experience -->
      <Section
        :title="data.headings.experience"
        icon="fa-solid fa-briefcase"
        class="experience"
        :key="`experience-${componentKeyAppendix}`"
      >
        <Experience :items="data.experience" :present-label="data.terms.present"></Experience>
      </Section>

      <!-- Certifications -->
      <Section :title="data.headings.certifications" icon="fa-solid fa-certificate" class="certifications">
        <Certifications :items="data.certifications"></Certifications>
      </Section>

      <!-- Skills -->
      <Section :title="data.headings.skills" icon="fa-solid fa-rocket" class="skills mb-0">
        <Skills :skills="data.skills"></Skills>
      </Section>

      <!-- Online Version Alert -->
      <Box v-html="data.onlineVersionAlert" class="d-none d-print-block fw-bold mt-5"></Box>
    </div>

    <!-- Sidebar -->
    <div class="sidebar col-12 col-sm-4 col-lg-3 p-0">
      <!-- Profile Picture -->
      <div class="profile">
        <img class="profile__picture" src="../assets/profile.jpeg" alt="" />
      </div>

      <!-- Contact Data -->
      <div class="contact p-4">
        <ul class="contact__list list-unstyled">
          <li>
            <i class="fa-solid fa-envelope"></i><a :href="`mailto:${data.contact.email}`">{{ data.contact.email }}</a>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i><a :href="`tel:${data.contact.phone}`">{{ data.contact.phone }}</a>
          </li>
          <li>
            <i class="fa-solid fa-mobile"></i><a :href="`tel:${data.contact.mobile}`">{{ data.contact.mobile }}</a>
          </li>
          <li>
            <i class="fa-solid fa-globe"></i><a :href="data.contact.web.url">{{ data.contact.web.text }}</a>
          </li>
          <li>
            <i class="fa-brands fa-linkedin-in"></i
            ><a :href="data.contact.linkedin.url" target="_blank">{{ data.contact.linkedin.text }}</a>
          </li>
          <li>
            <i class="fa-brands fa-github"></i
            ><a :href="data.contact.github.url" target="_blank">{{ data.contact.github.text }}</a>
          </li>
          <li>
            <i class="fa-brands fa-medium"></i
            ><a :href="data.contact.medium.url" target="_blank">{{ data.contact.medium.text }}</a>
          </li>
        </ul>
      </div>

      <!-- Education -->
      <div class="education p-4">
        <h2 class="sidebar__title">{{ data.headings.education }}</h2>
        <div
          v-for="(education, educationIndex) in data.education"
          :key="`education-${educationIndex}`"
          class="education__item"
        >
          <h4 class="education__item__degree">{{ education.title }}</h4>
          <h5 class="education__item__institution">{{ education.institution }}</h5>
          <div class="education__item__time">{{ education.start }} - {{ education.end }}</div>
        </div>
      </div>

      <!-- Languages -->
      <div class="languages p-4">
        <h2 class="sidebar__title">{{ data.headings.languages }}</h2>
        <ul class="languages__list list-unstyled">
          <li v-for="(language, languageIndex) in data.languages" :key="`language-${languageIndex}`">
            {{ language.name }} <span class="languages__list__level">({{ language.level }})</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/functions';
@import '../../node_modules/bootstrap/scss/variables';
@import '../../node_modules/bootstrap/scss/mixins';
@import '../style/variables';

.language-alert {
  margin-top: -3rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
}

@media print {
  .resume {
    min-height: 6000px;
  }
}
</style>
