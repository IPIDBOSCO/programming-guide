<script setup lang="ts">
import { CodeJar } from 'codejar';
import { createHighlighter } from 'shiki/bundle/web';

import { ref, onMounted, nextTick } from 'vue';

const props = withDefaults(defineProps<{
  language: string;
}>(), {
  language: 'javascript',
});

const codeRef = ref<HTMLElement | null>(null);

const jar = ref<CodeJar | null>(null);


onMounted(async () => {
  await nextTick();

  const highlighter = await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['javascript', 'typescript', 'python', 'bash', 'xml', 'json', 'css', 'cpp']
  });

  const highligh = (editor: HTMLElement) => {
    const code = editor.textContent || '';

    const html = highlighter.codeToHtml(code, { lang: props.language, theme: 'github-dark' });

    editor.innerHTML = html.replace(/^[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>[\s\S]*$/m, "$1");
  }

  const code = codeRef.value?.querySelector('pre.shiki code')

  jar.value = CodeJar(code as HTMLElement, highligh, {
    tab: '  ',
  });
});

</script>

<template>
  <div ref="codeRef" class="code-editor">
    <slot />
  </div>
</template>

<style></style>
