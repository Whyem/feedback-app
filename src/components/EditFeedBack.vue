<template>
  <div class="edit_container">
    <router-link to="/" class="back_link flex flex--ai">
      <img src="@/assets/shared/icon-arrow-left.svg" alt="arrow">
      <p class="back">Go Back</p>
    </router-link>

    <div class="white_container">
      <img src="@/assets/shared/icon-edit-feedback.svg" class="new" alt="edit">

      <h1>Editing 'Add a dark theme option'</h1>

      <form action="">
        <div class="form_row">
          <label for="title">Feedback Title</label>
          <small>Add a short, descriptive headline</small>
          <input type="text" name="title" id="title" value="Add a dark theme option"/>
        </div>

        <div class="form_row">
          <label for="category">Category</label>
          <small>Choose a category for your feedback</small>
          <DropDown :options="categories" />
        </div>

        <div class="form_row">
          <label for="status">Update Status</label>
          <small>Change feature state</small>
          <DropDown :options="statuses" />
        </div>

        <div class="form_row">
          <label for="detail">Feedback Detail</label>
          <small>Include any specific comments on what should be improved, added, etc.</small>
          <textarea name="detail" id="detail" cols="30" rows="3">It would help people with light sensitivities and who prefer dark mode.</textarea>
        </div>

        <div class="form_row fd-bm flex--ai flex--jsb flex--fr">
          
          <div class="fd-bm flex--ai">
            <input type="submit" value="Save Changes">
            <a href="" class="cancel_btn">Cancel</a>
          </div>

          <a href="" class="delete_btn">Delete</a>
        </div>
      </form>

    </div>
      
  </div>
</template>

<script>

import DropDown from './UI/DropDown.vue'

export default {
  name: 'EditFeedBack',

  components: {
    DropDown,
  },

  data: function () {
    return {
      categories: ["Feature","UI","UX","Enhancement","Bug"],
      statuses: ["Suggestion","Planned","In-Progress","Live"]
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.edit_container{
  width: 37%;
  margin: 0 auto;
}

.white_container{
  padding: 0 24px 24px 24px;
}

.back_link {
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  text-decoration: none;
  transition: all 400ms ease-in-out;
  margin-bottom: 68px;

  &:hover{
    text-decoration: underline;
  }
}

.back{
  margin-left:16px;
}

.white_container{
  background: #FFFFFF;
  border-radius: 10px;
  text-align: left;
  padding: 0 42px 40px 42px;
}

.new{
  transform: translateY(-50%);
}

.form_row{
  &:not(:last-child){
    margin-bottom: 28px;
  }
}

h1{
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.333333px;
  color: #3A4374;
  margin-bottom: 48px;
}

label{
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3A4374;
  display: block;
  margin-bottom: 4px;
}

small{
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  display:block;
  margin-bottom: 14px;
}

input[type="text"], textarea, .select_btn{
  background-color: #F7F8FD;
  border-radius: 5px;
  padding: 13px 24px;
  font-family: Jost;
  font-size: 15px;
  line-height: 22px;color: #3A4374;
  border:none;
  width: 100%;
  text-align: left;

  &:focus{
    border: 1px solid #4661E6;
  }
}

textarea{
  min-height: 96px;
}

.cancel_btn{
  color: #F2F4FE;
  background: #3A4374;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: all 400ms ease-in-out;

  &:hover{
    background: #656EA3;
  }
}

.delete_btn{
  color: #F2F4FE;
  background: #D73737;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  margin-right: 16px;
  transition: all 400ms ease-in-out;
  

  &:hover{
    background: #E98888;
  }
}

input[type="submit"]{
  font-family: 'Jost';
  color: #F2F4FE;
  background: #AD1FEA;
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  margin-right: 16px;
  transition: all 400ms ease-in-out;
  border: none;

  &:hover{
    background: #C75AF6;
  }
}

@media (max-width: 376px) {
  .edit_container{
    width: 87%;
  }

  .cancel_btn,.delete_btn{
    display: block;
    text-align: center;
    width: 100%;
    padding: 10px 24px;
    margin-top: 16px;
  }

  input[type="submit"]{
    width: 100%;
    padding: 10px 24px;
  }

  .back_link{
    margin-top: 34px;
  }

  h1{
    font-size: 18px;
  }

  label,p,small,input,textarea{
    font-size: 13px;
  }

  .form_row{
    &:nth-last-child(2){
      margin-bottom: 40px;
    }
  }

}

</style>
