/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';

import '../define/component-1.js';

suite('Component1', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('Default', () => {
    setup(async () => {
      el = await fixture(html` <component-1>light-dom</component-1> `);
      await el.updateComplete;
    });

    test('has a default heading "Hey there Component 1" and counter 5', () => {
      assert.equal(el.heading, 'Hey there Component 1');
      assert.equal(el.counter, 5);
    });

    suite('Semantic Dom and a11y', () => {
      test('SHADOW DOM - Structure test', async () => {
        await assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id'] });
      });

      test('LIGHT DOM - Structure test', async () => {
        await assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id'] });
      });
      test('a11y', async () => {
        await assert.isAccessible(el);
      });
    });
  });

  suite('Events ', () => {
    setup(async () => {
      el = await fixture(html` <component-1></component-1> `);
      await el.updateComplete;
    });

    test('increases the counter on button click', () => {
      el.shadowRoot.querySelector('button').click();
      assert.equal(el.counter, 6);
    });
  });

  suite('Override ', () => {
    setup(async () => {
      el = await fixture(html` <component-1 heading="attribute heading"></component-1> `);
      await el.updateComplete;
    });

    test('can override the heading via attribute', () => {
      assert.equal(el.heading, 'attribute heading');
    });
  });
});
