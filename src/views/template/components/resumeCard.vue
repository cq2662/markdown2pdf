<script setup lang="ts">
import { type TemplateType } from '@/templates/config'
import { useRouter } from 'vue-router'

defineProps<{ theme: TemplateType }>()
const router = useRouter()

const edit = (type: string) => {
  router.push({ path: '/editor', query: { type } })
}
</script>

<template>
  <div class="resume-card" @click="edit(theme.type)" data-aos="zoom-in">
    <img :src="theme.img" loading="lazy" />
    <div class="resume-card-mask">
      <button class="btn center pointer">使用模板</button>
    </div>
    {{ theme.name }}
  </div>
</template>

<style lang="scss" scoped>
.resume-card {
  margin: 0 20px 50px 0;
  width: 185px;
  height: 240px;
  position: relative;
  text-align: center;
  transition: transform 0.4s;
  color: var(--font-color);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  .resume-card-mask {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: none;
    background: rgba(0, 0, 0, 0.5);

    button {
      color: white;
      background: var(--theme);
    }
  }

  &:hover {
    transform: translateY(10px);
    .resume-card-mask {
      display: block;
    }
  }
}
</style>
