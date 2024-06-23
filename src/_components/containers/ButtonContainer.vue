<script lang="ts" setup>
import DefaultButtons from '../DefaultButtons.vue';
import OutlinedButtons from '../OutlinedButtons.vue';
import { dismissableButtons, standardButtons, standardButtonsOutlined } from '@/utils/consts';
import InlineCode from '@/_components/InlineCode.vue';
</script>

<template>
  <div>
    <h2>Buttons</h2>
    <section class="d-flex flex-wrap gap-05">
      <DefaultButtons />
      <div class="w-100">
        <section class="d-flex flex-wrap gap-05">
          <pre class="w-100 d-grid">
            <code class="language-js">
              {{ standardButtons() }}
            </code>
          </pre>
          <OutlinedButtons />
          <pre class="w-100 d-grid">
            <code class="language-js">
              {{ standardButtonsOutlined() }}
            </code>
          </pre>
        </section>
      </div>
      <div class="w-100 mt-1">
        <h3 class="m-0 mb-1">Dismissable</h3>
        <p>Using the available <InlineCode code="slot"/> in the <InlineCode code="Button" /> we can pass in the <InlineCode code="DismissButton" /></p>
        <section class="d-flex flex-wrap gap-05">
          <DefaultButtons :dismissable="true" />
          <div class="w-100">
            <section class="d-flex flex-wrap gap-05">
              <OutlinedButtons :dismissable="true" />
              <pre class="w-100 d-grid">
                <code class="language-js">
                {{ dismissableButtons() }}
                </code>
              </pre>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>