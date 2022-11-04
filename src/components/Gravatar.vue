<script setup lang="ts">
import { computed } from '@vue/reactivity';
import md5 from 'md5';

const props = defineProps({
    alt:        { type: String, default: 'Avatar' },
    email:      { type: String, required: true },
    hash:       { type: String },
    size:       { type: Number },
    defaultImg: { type: String, default: 'retro' },
    rating:     { type: String }
})

const url = computed(() => {
    const img = [
        `https://gravatar.com/avatar/`,
        props.hash || md5(props.email.trim().toLowerCase()),
        `?d=${props.defaultImg}`,
        props.size ? `&s=${props.size}`: '',
        props.rating ?`&r=${props.rating}` : ''
    ];
    return img.join('');
})
</script>

<template>
    <img
        :src="url"
        :alt="alt"
    />
</template>
