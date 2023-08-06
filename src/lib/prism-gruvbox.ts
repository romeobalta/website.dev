import type { PrismTheme } from 'prism-react-renderer'
const theme: PrismTheme = {
  plain: {
    color: '#393A34',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: {
        color: '#908174',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'delimiter',
        'boolean',
        'keyword',
        'selector',
        'important',
        'atrule',
      ],
      style: {
        color: '#9d0006',
      },
    },
    {
      types: ['operator', 'punctuation', 'attr-name'],
      style: {
        color: '#7c6f64',
      },
    },
    {
      types: ['tag', 'punctuation', 'doctype', 'builtin'],
      style: {
        color: '#b57614',
      },
    },
    {
      types: ['entity', 'number', 'symbol'],
      style: {
        color: '#8f3f71',
      },
    },
    {
      types: ['property', 'constant', 'variable'],
      style: {
        color: '#9d0006',
      },
    },
    {
      types: ['string', 'char'],
      style: {
        color: '#797403',
      },
    },
    {
      types: ['attr-value', 'punctuation'],
      style: {
        color: '#7c6f64',
      },
    },
    {
      types: ['url'],
      style: {
        color: '#797403',
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['function', 'maybe-class-name'],
      style: {
        color: '#076678',
      },
    },
    {
      types: ['regex'],
      style: {
        background: '#797403',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted'],
      style: {
        background: '#7c6f64',
      },
    },
    {
      types: ['deleted'],
      style: {
        background: '#9d0006',
      },
    },
  ],
}
export default theme
