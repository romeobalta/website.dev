import type { PrismTheme } from 'prism-react-renderer'
const theme: PrismTheme = {
  plain: {
    color: '#fbf1c7',
    backgroundColor: '#7c6f64',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: {
        color: '#a89984',
        fontStyle: 'italic',
      },
    },
    {
      types: [
        'delimiter',
        'boolean',
        'selector',
        'important',
        'atrule',
        'parameter',
        'attr-name',
      ],
      style: {
        color: '#fb4934',
      },
    },
    {
      types: ['tag', 'punctuation', 'doctype', 'builtin'],
      style: {
        color: '#fabd2f',
      },
    },
    {
      types: ['entity', 'number', 'symbol'],
      style: {
        color: '#d3869b',
      },
    },
    {
      types: ['string', 'char', 'string-property', 'property', 'attr-value'],
      style: {
        color: '#b8bb26',
      },
    },
    {
      types: ['property', 'constant', 'variable'],
      style: {
        color: '#fb4934',
      },
    },
    {
      types: ['url'],
      style: {
        color: '#b8bb26',
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#458588',
      },
    },
    {
      types: ['class-name', 'keyword'],
      style: {
        color: '#b16286',
      },
    },
    {
      types: ['maybe-class-name'],
      style: {
        color: '#458588',
      },
    },
    {
      types: ['regex'],
      style: {
        background: '#b8bb26',
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
        background: '#a89984',
      },
    },
    {
      types: ['deleted'],
      style: {
        background: '#fb4934',
      },
    },
    {
      types: ['nil', 'punctuation', 'operator'],
      style: {
        color: '#fe8019',
      },
    },
  ],
}
export default theme
