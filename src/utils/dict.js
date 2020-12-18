/*
 * @Description: 
 * @Author: zhang_weidie
 * @Date: 2020-06-17 09:28:26
 */ 
/**
 * 字典表
 */
//数据归集
export const dataCollectTitleList =
[
    {
        routePath: 'dataCollectList',
        routeName: '待审核数据'
    },
    {
        routePath: 'auditData',
        routeName: '已审核数据'
    },
    // {
    //     routePath: 'dataLog',
    //     routeName: '数据日志'
    // }
]
//数据源管理
export const dataSourceTitleList =
[
    {
        routePath: 'layerManage',
        routeName: '专题图层管理'
    }
]

//map图片处理数据
    export const areaIconMap =new Map(
        [
            
            [1,require('@/assets/danwei.png')],
            [2,require('@/assets/neishe.png')],
            [3,require('@/assets/xingzheng.png')],
            [4,require('@/assets/linshi.png')],  
            [5,require('@/assets/xuni.png')],
        ])
        export const applistIconMap =new Map(
          [
            ['0',require('@/assets/images/rejected.png')],
            ['1',require('@/assets/images/haspass.png')],
            ['2',require('@/assets/images/checking.png')],
          ])
      export const reviewIconMap =new Map(
      [
        ['0',require('@/assets/images/rejected.png')],
        ['1',require('@/assets/images/haspass.png')],
        ['2',require('@/assets/images/waitcheck.png')],
      ])
      export const userTypeMap =new Map(
        [
            
            ['1','业主'],
            ['2','家庭成员'],
            ['3','租户']
        ])
      export const roomTypeMap =new Map(
        [
            
            ['1','商品'],
            ['2','住宅'],
            ['3','车位']
        ])
        export const mockData = [
            {
              // 导航名称
              text: '1单元',
              sid:1-1,
              // 该导航下所有的可选项
              children: [
                {
                  // 名称
                  text: '1单元1001室',
                  id: 1,
                },
                {
                  text: '1单元1002室',
                  id: 2,
                },
              ],
            },
            {
              // 导航名称
              text: '2单元',
              sid:2-1,
              children: [
                {
                  // 名称
                  text: '2单元1001室',
                  id: 1,
                },
                {
                  text: '2单元1002室',
                  id: 2,
                },
              ],
            },
          ];
          export const mockDataed = [
                {
                  gmt_create_user:"张三",
                  is_back: true,
                  is_open:true,
                  titles:"关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行",
                  gmt_create:'2020-09-05',
                  score:1,
                  is_anonymous:true,
                },
                {
                  gmt_create_user:"李四",
                  is_back: false,
                  is_open:false,
                  titles:"关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行",
                  gmt_create:'2020-09-05',
                  score:0,
                  is_anonymous:true,
                },
                {
                  gmt_create_user:"张三",
                  is_back: true,
                  is_open:true,
                  titles:"关于张王村农田灌溉工程项目加长换行",
                  gmt_create:'2020-09-05',
                  score:3,
                  is_anonymous:true,
                },
                {
                  gmt_create_user:"李四",
                  is_back: false,
                  is_open:false,
                  titles:"关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行关于张王村农田灌溉工程项目加长换行",
                  gmt_create:'2020-09-05',
                  score:1,
                  is_anonymous:true,
                },
                {
                  gmt_create_user:"李四",
                  is_back: false,
                  is_open:false,
                  titles:"测试4",
                  gmt_create:'2020-09-05',
                  score:2,
                  is_anonymous:true,
                },
          ];