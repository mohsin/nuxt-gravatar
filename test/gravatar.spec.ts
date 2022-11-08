import { describe, it, expect, done } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import md5 from 'md5'

import Gravatar from '../src/components/Gravatar.vue'

describe('Gravatar Image Component', async () => {
  it('has correct name', () => {
    expect(Gravatar.__name).toBe('Gravatar')
  })

  describe('props', () => {
    it('has email property', () => {
      expect(Gravatar.props.email.type).toBe(String)
    })

    it('has hash property', () => {
      expect(Gravatar.props.hash.type).toBe(String)
    })

    it('has size property', () => {
      expect(Gravatar.props.size.type).toBe(Number)
      expect(Gravatar.props.size.default).toBe(undefined)
    })

    it('has defaultImg property', () => {
      expect(Gravatar.props.defaultImg.type).toBe(String)
      expect(Gravatar.props.defaultImg.default).toBe('retro')
    })

    it('has rating property', () => {
      expect(Gravatar.props.rating.type).toBe(String)
    })

    it('has alt property', () => {
      expect(Gravatar.props.alt.type).toBe(String)
      expect(Gravatar.props.alt.default).toBe('Avatar')
    })
  })

  describe('computed', () => {
    describe('url', () => {
      const email = 'foo@bar.com'
      const hash = md5(email)
      const gravatar = shallowMount(Gravatar, { props: { email: email } })

      it('has correct url by default', () => {
        expect(gravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${hash}?d=retro`
        )
      })

      const anotherEmail = 'Foo@BAR.com'
      const anotherGravatar = shallowMount(Gravatar, { props: { email: anotherEmail } })

      it('converts email to lower case', () => {
        expect(anotherGravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${hash}?d=retro`
        )
      })

      it('uses given md5 hash', () => {
        const md5Hash = '123'
        const anotherGravatar = shallowMount(Gravatar, { props: { hash: md5Hash } })

        expect(anotherGravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${md5Hash}?d=retro`
        )
      })

      it('passes size', () => {
        const size = 100
        const anotherGravatar = shallowMount(Gravatar, { props: { email: email, size: size } })

        expect(anotherGravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${hash}?d=retro&s=100`
        )
      })

      it('passes default image', () => {
        const defaultImg = 'mm'
        const anotherGravatar = shallowMount(Gravatar, { props: { email: email, defaultImg: defaultImg } })

        expect(anotherGravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${hash}?d=mm`
        )
      })

      it('passes rating', () => {
        const rating = 'pg'
        const anotherGravatar = shallowMount(Gravatar, { props: { email: email, rating: rating } })

        expect(anotherGravatar.attributes('src')).toEqual(
          `https://gravatar.com/avatar/${hash}?d=retro&r=pg`
        )
      })
    })
  })

  describe('template', () => {
    const email = 'foo@bar.com'
    const hash = md5(email)
    let gravatar = shallowMount(Gravatar, { props: { email: email } })

    it('sets alt by default', () => {
      expect(gravatar.attributes('alt')).toEqual('Avatar')
    })

    it('sets alt to given one', () => {
      const alt = 'John'
      gravatar = shallowMount(Gravatar, { props: { email: email, alt: alt } })
      expect(gravatar.attributes('alt')).toEqual(alt)
    })

    it('is image', () => {
      expect(gravatar.element.tagName).toEqual('IMG')
    })
  })
})
