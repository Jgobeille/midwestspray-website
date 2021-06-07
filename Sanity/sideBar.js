import React from "react";
// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Admin Panel")
    .items([
      S.listItem()
        .title("Home Page")
        .child(
          S.list()
            .title("Home Page Settings")
            .items([
              S.listItem()
                .title("Hero Section Settings")
                .child(
                  S.document()
                    .schemaType("homePageTopSection")
                    .documentId("homePageTopSection")
                ),
              S.listItem()
                .title("Repair Section Settings")
                .child(
                  S.documentList()
                    .title("All Repairs")
                    .filter('_type == "homePageRepairSection"')
                ),
            ])
        ),

      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog Settings")
            .items([
              S.listItem()
                .title("All Authors")
                .child(
                  S.documentList()
                    .title("All Authors")
                    .filter('_type == "author"')
                ),
              S.listItem()
                .title("All Categories")
                .child(
                  S.documentList()
                    .title("All Categories")
                    .filter('_type == "category"')
                ),
              S.listItem()
                .title("All Posts")
                .child(
                  S.documentList().title("All Posts").filter('_type == "post"')
                ),
              S.listItem()
                .title("Posts By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Posts by Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type == "post" && $categoryId in categories[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by Author")
                    .child((authorId) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Contact Page")
        .child(
          S.document().schemaType("contactPage").documentId("contactPage")
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "post",
            "author",
            "category",
            "contactPage",
            "homePageTopSection",
            "homePageRepairSection",
          ].includes(listItem.getId())
      ),
    ]);
