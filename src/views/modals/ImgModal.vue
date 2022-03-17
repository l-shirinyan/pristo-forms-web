<template>
  <MPRModalDialog detailsModal='image' :title="$t('upload_file')">
    <div class='p-1'>
      <div>{{ $t('choose_file') }}</div>
      <div class='flex gap-8 p-4 mt-8 outline outline-2 outline-gray-200 rounded-md'>
        <div class='w-28 h-28'>
          <label style="cursor: pointer">
            <img class='h-28 w-28' src='../../images/add_photo_en.svg'>
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

        <div class='flex w-24 h-24'>
          <div class=' w-24 h-24 outline bg-gray-100 outline-1 outline-gray-200 rounded-md' v-for="(image, index) in images">
            <img :src="image" alt='images' width='200' height='200'/>
            <div class='w-24 h-5 mt-[-5px] outline outline-1 outline-gray-200 rounded-md'>
              <button class='ml-20' @click="removeImage(index)"> {{image.name}} X</button>
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