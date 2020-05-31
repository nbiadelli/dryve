
import { mapState, mapMutations, mapActions } from "vuex";

 const search = {
  computed: { ...mapState(["filter", "carList"]) },
   methods: {
    ...mapMutations(["setList"]),
    ...mapActions(["actionGetCarList"]),

      searchList: async function () {
      console.log("primeiro", this.actionGetCarList());
      const data = await this.actionGetCarList()
      console.log("dataaaaaaa", data)
      const searchList = data.filter(
        x =>
          x.model_year.toString().includes(this.filter) ||
          x.model_name.toLowerCase().includes(this.filter) ||
          x.brand_name.toLowerCase().includes(this.filter) ||
          x.transmission_type.toLowerCase().includes(this.filter)
      );
      return await this.setList(searchList)
    }

  },
}

export default search
