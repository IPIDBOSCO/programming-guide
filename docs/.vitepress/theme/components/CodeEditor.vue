<script setup lang="ts">
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import cpp from 'highlight.js/lib/languages/cpp';

import { ref, onMounted, watch } from 'vue';

import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);
hljs.registerLanguage('css', css);
hljs.registerLanguage('cpp', cpp);

const props = defineProps<{
  code: string;
}>();

const codeRef = ref<HTMLElement | null>(null);

const highlightCode = () => {
  if (codeRef.value) {
    hljs.highlightElement(codeRef.value);
  }
};
onMounted(() => {
  highlightCode();
});

</script>

<template>
  <pre
    class="code-editor"><code ref="codeRef" class="hljs" editable="true" contenteditable="true"><slot></slot></code></pre>
</template>