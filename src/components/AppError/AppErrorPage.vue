<script setup lang="ts">
const router = useRouter()

router.afterEach(() => {
  useErrorStore().activeError = false
})
</script>

<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">404</h1>
      <p class="error__msg">Page not found</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../../assets/index.css";

.error {
  @apply mx-auto -mt-20 flex min-h-[90vh] flex-1 items-center justify-center p-10 text-center;
}

.error__icon {
  @apply text-destructive text-7xl;
}

.error__code {
  @apply text-secondary text-7xl font-extrabold;
}

.error__msg {
  @apply text-primary text-3xl font-extrabold;
}

.error-footer {
  @apply mt-6 flex flex-col items-center justify-center gap-5 font-light;
}

.error-footer__text {
  @apply text-muted-foreground text-lg;
}

p {
  @apply my-2;
}
</style>
