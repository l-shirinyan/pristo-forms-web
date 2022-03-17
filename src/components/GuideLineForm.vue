<template>
  <div class="accordion max-w-6xl mx-auto mt-5 shadow-sm rounded-md" id="accordionExample">
    <div class='h-1 rounded-t-md bg-guideline'></div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingOne">

        <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-10
        text-sm text-midnight text-left font-medium
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
          Guidelines for starting control
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
           data-bs-parent="#accordionExample">
        <div class="accordion-body text-font-brown leading-loose text-sm pt-4 pb-12 pr-20 pl-10">
          The controllers will present themselves, briefly review the format of the expected control procedure and ask the principal to present himself and his school briefly.
          <span class='block'>The issues below should be noted to the principal</span>
          <span class='block'>The Ministry of Education's Control and Enforcement Licensing Administration is the body responsible for enforcing
            the Ministry of Education's guidelines among schools and external parties related to the education system. "</span>
          By virtue of its role, the administration controls
          the implementation of the policy, the implementation of pedagogical processes in the schools, as well as the use of the resources allocated by the ministry to the schools.
          <span class='block'>
              System won a tender to control the performance of tuition in schools in the upper division, the purpose of which is to carry out multidisciplinary control
            in the upper division in a nationwide distribution.
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({})

</script>

<style scoped>

</style>