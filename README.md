# SUMMER-CICD

## การเขียน commit ที่ดี แบบ simple ที่สุด
1. เป็น present simple tense (verb ช่อง 1)
2. บอก hueristic intention
3. บอก scope of work


```
(HUERISTIC)(SCOPE_OF_WORK): [JIRA_CARD] COMMIT_MESSAGE
ex: (feat)(authentication): [BKN-1732] Add submit button

HUERISTIC:
- chore: การเปลี่ยนแปลงที่ไม่กระทบกับ logic ใดๆ
- fix: การแก้ issue
- refactor: การ refactor code
- feat: การเพิ่ม feature ใหม่
```

## Git command
```
เอา repo ขึ้น git remote
- git init
- git add .
- git commit -m “commit message”
- git remote add origin [GIT_URI]
- git push -u origin head

เปลี่ยน commit message
- git commit --amend -m “new commit message”

เปลี่ยนชื่อ branch
- git branch -m ชื่อใหม่

แตก branch ใหม่จาก branch ที่เราอยู่
git checkout -b ชื่อbranch
```