
<script>
export default {
  data() {
    return {
      isShow: false,
      inActive : `w-full border border-gray-300 p-2 rounded-lg ${this.readonly ? 'bg-gray-200' : ''}`
    };
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    icon: String,
    textarea: Boolean,
    date: Boolean,
    datetime: Boolean,
    password: Boolean,
    select: Boolean,
    selectOptions: Array,
    required: Boolean,
    placeholder: String,
    inputIcon: String,
    readonly:Boolean,
    type:String
  },
  methods: {
    async showPassword() {
        const e = this.$el.querySelector('span.iconBox');
        e.classList.add('bg-gray-700')

      if (this.password) {
        if(e){
        }
        // if (this.inputIcon == "i-mdi-eye-outline") {
        //     this.inputIcon = "i-mdi-eye-off-outline";
        // } else {
        //     alert("work");
        //   this.inputIcon = "i-mdi-eye-outline";
        // }
      }
    },
  },
};
</script>

<template>
  <div class="relative mt-4">
    <label class="text-gray-600 flex items-center mb-2 text-sm" for="">
      <span v-if="icon" class="text-xl me-1" :class="icon"></span>
      {{ label }} <span class=" text-rose-500" v-if="required">*</span>
    </label>
    <textarea
      v-if="textarea"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      id=""
      rows="3"
      :class="inActive"
      :value="modelValue"
      :readonly="readonly? true:false"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <select
      v-else-if="select"
      :name="name"
      :class="inActive"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"
      @change="$emit('selected',$event.target.value)"
    >
      <option value="">Pilihan</option>
      <option
        v-for="option in selectOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <input
      v-else-if="date"
      type="date"
      :class="inActive"
      :value="modelValue"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly? true:false"
    />
    <input
      v-else-if="datetime"
      type="datetime-local"
      :class="inActive"
      :value="modelValue"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly? true:false"
    />
    <input
      v-else-if="password"
      type="password"
      :class="inActive"
      :value="modelValue"
      :name="name"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"

      :readonly="readonly? true:false"
    />
    <input
      v-else
      :class="inActive"
      :value="modelValue"
      :name="name"
      class="password"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly? true:false"
      :type="type"
    />
    <div
      v-if="inputIcon"
      @click="showPassword()"
      :class="password ? 'hover:text-sky-600 hover:cursor-pointer' : ''"
      class="absolute z-20 me-3 end-0 mt-1 top-1/2 transform -translate-y-1/2 text-gray-500"
    >
      <span class="iconBox" :class="inputIcon"></span>
    </div>
  </div>
</template>
