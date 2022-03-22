<template>
  <MPRModalDialog modalName='imageModal' :title="$t('attachment.upload_file')">
    <div class='p-1 sm:h-[415px] h-72'>
      <div class='sm:my-16 mt-10'>{{ $t('attachment.choose_file') }}</div>
      <div class='flex gap-8 py-4 pl-4 sm:mt-8 mt-4 h-36 outline outline-2 outline-gray-200 rounded-md'>
        <div class='sm:w-36 sm:h-36 w-32 h-32'>
          <label style="cursor: pointer">
            <img class='sm:w-36 sm:h-36 w-32 h-32 sm:pb-8 pb-4' src='../../images/add_photo_en.svg'>
            <input
              type="file"
              class="file"
              @change="onFileChange"
              style="display: none"
              id="file"
              ref="files"
              name="file[]"
              multiple
              accept="image/*"
            />
          </label>
        </div>

        <div class='flex w-36 h-36'>
          <div class='w-36 h-36 outline bg-gray-100 outline-1 outline-gray-200 rounded-md' v-for="(image, index) in images">
            <img :src="image" alt='images' width='200' height='200'/>
            <div class='w-36 h-5 -mt-1 outline outline-1 outline-gray-200 rounded-md'>
              <button class='ml-32' @click="removeImage(index)"> {{image.name}} X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MPRModalDialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data: function () {
      return {
        images: [],
      }
    },
    methods: {
      onFileChange(e: any) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files);
      },
      createImage(files: string | any[]) {
        var vm = this;
        for (var index = 0; index < files.length; index++) {
          var reader = new FileReader();
          reader.onload = function(event) {
            const imageUrl = event.target!.result;
            vm.images.push(imageUrl);
          }
          reader.readAsDataURL(files[index]);
        }
      },
      removeImage(index: number) {
        this.images.splice(index, 1)
      }
    }
  });

</script>