<script setup lang="ts">
import { type CodeJar } from 'codejar';
import { createHighlighter } from 'shiki/bundle/web';

import Button from 'primevue/button';
import Badge from 'primevue/badge';

import { ref, onMounted, nextTick } from 'vue';

import { codapi } from '../utils/codapi';

const props = withDefaults(defineProps<{
  language: string;
}>(), {
  language: 'javascript',
});

const codeRef = ref<HTMLElement | null>(null);
const codeOutputRef = ref<HTMLElement | null>(null);

const jar = ref<CodeJar | null>(null);

const originalCode = ref<string>('');
const code = ref<string>('');
const result = ref<string>(' ');

const isRunning = ref<boolean>(false);
const okResult = ref<boolean>(false);
const completed = ref<boolean>(false);

onMounted(async () => {
  const { CodeJar } = await import('codejar');
  await nextTick();

  const highlighter = await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['javascript', 'typescript', 'python', 'bash', 'xml', 'json', 'css', 'cpp']
  });

  const highligh = (editor: HTMLElement) => {
    const innerCode = editor.textContent || '';

    let html = highlighter.codeToHtml(innerCode, { lang: props.language, theme: 'github-dark' });
    html = html.replace(/^[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>[\s\S]*$/m, "$1");

    editor.innerHTML = html;

    code.value = jar.value?.toString() || '';
  }

  const codeElement = codeRef.value?.querySelector('pre.shiki code')

  jar.value = CodeJar(codeElement as HTMLElement, highligh, {
    tab: '  ',
  });

  originalCode.value = jar.value.toString();
  code.value = jar.value.toString();
});

const resetCode = () => {
  if (isRunning.value) return;

  if (jar.value) {
    jar.value.updateCode(originalCode.value);
    code.value = originalCode.value;
    result.value = ' ';
    okResult.value = false;
    completed.value = false;
  }
};

const runCode = async () => {
  if (isRunning.value) return;

  try {
    result.value = ' ';
    isRunning.value = true;
    okResult.value = false;
    completed.value = false;
    // delay to show running state
    // await new Promise(resolve => setTimeout(resolve, 60000));

    const response = await codapi(code.value, props.language);

    result.value = response.stdout;
    okResult.value = response.ok;

  } catch (error) {
    result.value = 'Error al ejecutar el código.';
    okResult.value = false;
  } finally {
    isRunning.value = false;
    completed.value = true;
  }
};
</script>

<template>
  <div ref="codeRef" class="code-editor">
    <slot />

    <div class="mini-bar">
      <div>
        <strong>Salida: <span v-if="completed" class="status" :ok="okResult">
            <Badge v-if="okResult" severity="success" value="OK" />
            <Badge v-else severity="danger" value="ERROR" />
          </span></strong>
      </div>
      <div class="actions">
        <Button @click="resetCode" class="btn-reset" variant="outlined" severity="danger" icon="pi pi-refresh"
          iconPos="left" label="Reset"></Button>
        <Button @click="runCode" class="btn-run" variant="outlined" severity="success" icon="pi pi-play" iconPos="left"
          label="Run"></Button>
      </div>
    </div>

    <div class="language-plaintext vp-adaptive-theme">
      <!-- <button title="Copy Code" class="copy"></button> -->
      <!-- <span class="lang">salida</span> -->
      <pre class="shiki shiki-themes github-light github-dark vp-code"><code ref="codeOutputRef">{{ result }} <span v-if="isRunning" class="centered"><i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i> <span>Running...</span></span>
</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-editor {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}

.mini-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--vp-c-bg-secondary);
  border-radius: 0.25rem;
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
