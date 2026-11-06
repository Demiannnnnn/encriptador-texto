const test = require('node:test');
const assert = require('node:assert/strict');
const { encriptar, desencriptar } = require('../Proyecto Alura/encriptador.js');

test('encriptar reemplaza cada vocal por su clave', () => {
  assert.equal(encriptar('a'), 'ai');
  assert.equal(encriptar('e'), 'enter');
  assert.equal(encriptar('i'), 'imes');
  assert.equal(encriptar('o'), 'ober');
  assert.equal(encriptar('u'), 'ufat');
});

test('encriptar deja intactas consonantes, espacios y signos', () => {
  assert.equal(encriptar('xyz 123, ¡!'), 'xyz 123, ¡!');
});

test('encriptar una frase completa (ejemplo del challenge)', () => {
  assert.equal(encriptar('gato'), 'gaitober');
  assert.equal(
    encriptar('fenix'),
    'fenternimesx'
  );
});

test('encriptar no aplica claves a mayusculas ni acentos', () => {
  assert.equal(encriptar('AEIOU áé'), 'AEIOU áé');
});

test('encriptar y desencriptar texto vacio', () => {
  assert.equal(encriptar(''), '');
  assert.equal(desencriptar(''), '');
});

test('desencriptar revierte cada clave', () => {
  assert.equal(desencriptar('ai'), 'a');
  assert.equal(desencriptar('enter'), 'e');
  assert.equal(desencriptar('imes'), 'i');
  assert.equal(desencriptar('ober'), 'o');
  assert.equal(desencriptar('ufat'), 'u');
  assert.equal(desencriptar('gaitober'), 'gato');
});

test('desencriptar(encriptar(x)) devuelve x para texto en minusculas', () => {
  const frases = [
    'hola mundo',
    'murcielago',
    'aeiou aeiou',
    'el veloz murcielago hindu comia feliz cardillo y kiwi',
    'sin vocales: xyz',
  ];
  for (const f of frases) {
    assert.equal(desencriptar(encriptar(f)), f);
  }
});
