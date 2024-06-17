<script lang="ts" setup>
import DefaultButtons from '../DefaultButtons.vue';
import OutlinedButtons from '../OutlinedButtons.vue';
</script>

<template>
  <div>
    <h2>Buttons</h2>
    <section class="d-flex flex-wrap gap-05">
      <DefaultButtons />
      <div class="w-100">
        <section class="d-flex flex-wrap gap-05">
          <OutlinedButtons />
          <pre class="w-100 d-grid">
            <code class="language-js">
            {{`
              // Standard Button
              <Button title="Primary" />
              // Outlined Button
              <Button title="Primary "kind="primary--outlined" />
            `}}
            </code>
          </pre>
        </section>
      </div>
      <div class="w-100 mt-1">
        <h3 class="m-0 mb-1">Dismissable</h3>
        <section class="d-flex flex-wrap gap-05">
          <DefaultButtons :dismissable="true" />
          <div class="w-100">
            <section class="d-flex flex-wrap gap-05">
              <OutlinedButtons :dismissable="true" />
              <div class="code-wrapper">
                <pre class="w-100 d-grid">
                  <code class="language-js">
                  {{`
                    // Standard Dismissable Button
                    <Button title="Primary" kind="primary">
                      <DismissButton />
                    </Button>
                  `}}
                  </code>
                </pre>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
