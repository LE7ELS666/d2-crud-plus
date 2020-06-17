import { mobileValidator } from 'el-phone-number-input'
import { GetCustomName } from './api'
export const crudOptions = (vm) => {
  return {
    columns: [
      {
        title: '手机号',
        key: 'mobileValue',
        sortable: true,
        align: 'left',
        search: {
          disabled: false,
          width: '260px'
        },
        type: 'phoneNumber',
        form: {
          component: {
            props: {
              onlyCountries: ['CN', 'HK', 'TW', 'US']
            }
          },
          rules: [{ required: true, message: '请输入手机号' }, { validator: mobileValidator, message: '手机号不正确' }],
          helper: '手机号输入完成后，可以远程获取客户姓名',
          valueChange (key, value, form) {
            console.log('valueChange', value)
            if (form.phone == null || form.phone !== '') {
              GetCustomName(value.callingCode, value.phoneNumber).then(ret => {
                if (ret.data != null) {
                  form.guestName = ret.data
                }
              })
            }
          }
        },
        valueBuilder (row) { // 将row里面手机号相关的字段组合成组件需要的value对象
          row.mobileValue = { phoneNumber: row.phone, callingCode: row.code, countryCode: row.country }
        },
        valueResolve (form) { // 将value解析成row的字段
          if (form.mobileValue != null) {
            form.phone = form.mobileValue.phoneNumber
            form.code = form.mobileValue.callingCode
            form.country = form.mobileValue.countryCode
          }
        }
      },
      {
        title: '客户姓名',
        key: 'guestName',
        sortable: true,
        search: {
          disabled: false
        },
        form: {
          rules: [{ required: false, message: '请输入客户姓名' }],
          helper: '远程获取客户姓名在这里显示'
        }
      },
      {
        title: '手机号2',
        key: 'allMobileValue',
        sortable: true,
        align: 'left',
        search: {
          disabled: false,
          width: '260px'
        },
        type: 'phoneNumber',
        form: {
          rules: [{ required: true, message: '请输入手机号' }, { validator: mobileValidator, message: '手机号不正确' }],
          helper: '支持全部国家，支持输入筛选'
        }
      }
    ]
  }
}
