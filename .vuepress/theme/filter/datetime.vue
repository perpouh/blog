<script>
import moment from 'moment'

export default {
  filters:{
    date_ja: function(value) {
      if (!value) return ''
      return moment(value).format('YYYY年M月D日')
    }
  }
}
</script>