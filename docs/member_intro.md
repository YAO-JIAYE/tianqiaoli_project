<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.jsdelivr.net/gh/YAO-JIAYE/my_imgs_repo@main/imgs/Snipaste_2025-06-28_14-31-20.png',
    name: '姚佳燁',
    title: '学生番号M25W0130',
    desc:'⭐ウェブサイト担当，写真やデータをまとめて、ウェブサイトを作る。',
    links: [
      { icon: 'github', link: 'https://github.com/YAO-JIAYE' },
    ]
  },
  {
    avatar: '',
    name: '张子盈',
    title: '学生番号M25W0382',
    desc:'👧水を取って、水質（pH・にごり・酸素など）をチェック',
  },
  {
    avatar: '',
    name: '高天',
    title: '学生番号M25W0292',
    desc:'👨鴨川の環境を撮影する',
  },
  {
    avatar: '',
    name: '葉自衡',
    title: '学生番号M25W0341',
    desc:'👦鴨川の環境を撮影する',
  },
  {
    avatar: '',
    name: '王嘉琳',
    title: '学生番号M25W0327',
    desc:'👩水を取って、水質（pH・にごり・酸素など）をチェック',
  },
  {
    avatar: '',
    name: '胡焙然',
    title: '学生番号M25W0026',
    desc:'👱スケジュール管理、資料まとめ、メモ・記録など',
  },
  
  
]
</script>

# Our Team🤗


<VPTeamMembers size="medium" :members />